import React, { FC } from 'react';
import './Initiatives.css';

export type InitiativeType = 'article' | 'talk' | 'video';

export interface Initiative {
    title: string;
    date: string;
    type: InitiativeType;
    link: string;
}

interface SortableInitiative extends Initiative {
    sortableDate: string;
}

declare const require: {
    context: (basePath: string, deep: boolean, pattern: RegExp) => {
        (relativePath: string): string;
        keys: () => string[];
    };
};

const markdownContext = require.context('../../assets/articles', false, /\.md$/);

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

const parseFrontMatter = (content: string): Record<string, string> => {
    const frontMatterMatch = content.match(/^---\s*([\s\S]*?)\s*---/);

    if (!frontMatterMatch) {
        return {};
    }

    return frontMatterMatch[1].split('\n').reduce<Record<string, string>>((acc, line) => {
        const match = line.match(/^([a-zA-Z_]+):\s*(.*)$/);

        if (match) {
            acc[match[1].trim()] = match[2].trim().replace(/^['"]|['"]$/g, '');
        }

        return acc;
    }, {});
};

const normalizeMarkdownArticle = (filePath: string): SortableInitiative | null => {
    const content = markdownContext(filePath);
    const frontMatter = parseFrontMatter(content);
    const rawDate = frontMatter.date || '';
    const handle = filePath.replace(/^\.\//, '').replace(/\.md$/, '');
    const slug = frontMatter.slug || handle;
    const title = frontMatter.title || handle.replace(/-/g, ' ');

    if (!title || !slug) {
        return null;
    }

    return {
        title,
        date: formatDateLabel(rawDate),
        type: 'article',
        link: `/articolo/${slug}`,
        sortableDate: rawDate,
    };
};

const sortInitiativesDescending = (items: SortableInitiative[]): SortableInitiative[] =>
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

export const getMarkdownArticles = (): Initiative[] =>
    sortInitiativesDescending(
        markdownContext.keys()
            .map(normalizeMarkdownArticle)
            .filter((item): item is SortableInitiative => Boolean(item))
    ).map(({ sortableDate, ...item }) => item);

const MarkdownArticles: FC = () => {
    const articles = getMarkdownArticles();

    if (!articles.length) {
        return null;
    }

    return (
        <div className="initiatives-markdown-section">
            <h4 className="initiatives-markdown-title poppins-font">
                Articoli dalla cartella <span>articles</span>
            </h4>
            {articles.map((item, index) => (
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
            ))}
        </div>
    );
};

export default MarkdownArticles;
