import React, { FC, useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Initiatives.css';

type InitiativeType = 'article' | 'talk' | 'video';

interface Initiative {
    title: string;
    date: string;
    type: InitiativeType;
    link: string;
}

interface AirtableRecord {
    id: string;
    fields: {
        title?: string;
        date?: string;
        type?: string;
        link?: string;
    };
}

const typeIcon: Record<InitiativeType, string> = {
    article: 'fa-file-text-o',
    talk: 'fa-microphone',
    video: 'fa-youtube-play',
};

const typeLabel: Record<InitiativeType, string> = {
    article: 'Articolo',
    talk: 'Talk',
    video: 'Video',
};

const formatDateLabel = (date: string): string => {
    if (!date) {
        return '';
    }

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) {
        return date;
    }

    return new Intl.DateTimeFormat('it-IT', {
        month: 'short',
        year: 'numeric',
    }).format(parsed).replace('.', '').toUpperCase();
};

interface AirtableInitiative extends Initiative {
    sortableDate: string;
}

const sortInitiativesDescending = (items: AirtableInitiative[]): AirtableInitiative[] =>
    [...items].sort((a, b) => {
        const aDate = new Date(a.sortableDate).getTime();
        const bDate = new Date(b.sortableDate).getTime();

        if (Number.isNaN(aDate) && Number.isNaN(bDate)) {
            return 0;
        }

        if (Number.isNaN(aDate)) {
            return 1;
        }

        if (Number.isNaN(bDate)) {
            return -1;
        }

        return bDate - aDate;
    });

const normalizeAirtableRecords = (records: AirtableRecord[]): Initiative[] =>
    sortInitiativesDescending(
        records
            .map(({ fields }) => {
                const rawDate = fields.date || '';
                return {
                    title: fields.title || '',
                    date: formatDateLabel(rawDate),
                    type: (fields.type as InitiativeType) || 'article',
                    link: fields.link || '#',
                    sortableDate: rawDate,
                };
            })
            .filter(item => item.title && item.link)
    ).map(({ sortableDate, ...item }) => item);

const AIRTABLE_API_URL = process.env.REACT_APP_AIRTABLE_API_URL || 'https://api.airtable.com/v0';
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.REACT_APP_AIRTABLE_TABLE_NAME;
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;

const initiatives: Initiative[] = [];

type FilterType = InitiativeType | 'all';

const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'Tutti' },
    { key: 'article', label: 'Articoli' },
    { key: 'talk', label: 'Talk' },
    { key: 'video', label: 'Video' },
];

const Initiatives: FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [data, setData] = useState<Initiative[]>(initiatives);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hasAirtableConfig = Boolean(AIRTABLE_API_KEY && AIRTABLE_BASE_ID && AIRTABLE_TABLE_NAME);

        if (!hasAirtableConfig) {
            setIsLoading(false);
            return;
        }

        const endpoint = `${AIRTABLE_API_URL}/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}?view=Grid%20view`;

        fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                Accept: 'application/json',
            },
        })
            .then(async response => {
                if (!response.ok) {
                    throw new Error(`Airtable request failed with status ${response.status}`);
                }

                const payload = await response.json();
                const mapped = normalizeAirtableRecords(payload.records || []);
                setData(mapped.length > 0 ? mapped : initiatives);
            })
            .catch(() => {
                setData(initiatives);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const visible = activeFilter === 'all'
        ? data
        : data.filter(i => i.type === activeFilter);

    return (
        <div className="home scrollable">
            <Header />
            <section className="container-fluid main-container p-0">
                <div className="row home-details-container">
                    <div className="color-block d-none d-lg-block"></div>
                    <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                    <div className="col-12 col-lg-8 offset-lg-4 main-content">
                        <div className="initiatives-wrapper">
                            <h3 className="text-uppercase poppins-font initiatives-title pb-3">
                                Le mie <span>Iniziative</span>
                            </h3>
                            <div className="initiatives-filters">
                                {filters.map(f => (
                                    <button
                                        key={f.key}
                                        className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
                                        onClick={() => setActiveFilter(f.key)}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>
                            {isLoading ? (
                                <p className="open-sans-font initiatives-empty">Caricamento iniziative…</p>
                            ) : visible.length === 0 ? (
                                <p className="open-sans-font initiatives-empty">Nessuna iniziativa in questa categoria.</p>
                            ) : (
                                visible.map((item, index) => (
                                    <a key={`${item.title}-${index}`} href={item.link} target="_blank" rel="noopener noreferrer" className="initiative-item">
                                        <div className="initiative-icon">
                                            <i className={`fa ${typeIcon[item.type]}`}></i>
                                        </div>
                                        <div className="initiative-details">
                                            <span className="initiative-type">{typeLabel[item.type]}</span>
                                            <h5 className="initiative-title poppins-font">{item.title}</h5>
                                            <span className="initiative-date open-sans-font">{item.date}</span>
                                        </div>
                                    </a>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Initiatives;
