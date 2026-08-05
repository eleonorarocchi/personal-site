import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './Article.css';

interface ArticlePayload {
    title: string;
    date: string;
    slug: string;
    body: string;
}

const Article: FC = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState<ArticlePayload | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        fetch(`/api/article?slug=${encodeURIComponent(slug || '')}`, {
            headers: {
                Accept: 'application/json',
            },
            signal: controller.signal,
        })
            .then(async response => {
                if (!response.ok) {
                    throw new Error(
                        `Article request failed with status ${response.status}`
                    );
                }

                return response.json();
            })
            .then(payload => {
                setArticle(payload);
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    return;
                }

                console.error(error);
                setArticle(null);
            })
            .finally(() => {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            });

        return () => controller.abort();
    }, [slug]);

    return (
        <div className="home scrollable">
            <Header />
            <section className="container-fluid main-container p-0">
                <div className="row home-details-container">
                    <div className="color-block d-none d-lg-block"></div>
                    <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                    <div className="col-12 col-lg-8 offset-lg-4 main-content">
                        <div className="initiatives-wrapper">
                            {isLoading ? (
                                <div
                                    className="article-loader"
                                    role="status"
                                    aria-label="Caricamento articolo"
                                >
                                    <svg
                                        className="article-loader__pulse"
                                        viewBox="0 0 200 60"
                                        aria-hidden="true"
                                    >
                                        <polyline
                                            points="0,30 45,30 55,20 65,42 78,8 92,50 105,30 200,30"
                                        />
                                    </svg>

                                    <span className="visually-hidden">
                                        Caricamento articolo…
                                    </span>
                                </div>
                            ) : !article ? (
                                <p className="open-sans-font initiatives-empty">Articolo non trovato.</p>
                            ) : (
                                <article className="article-content">
                                    <h3 className="text-uppercase poppins-font initiatives-title pb-3">
                                        {article.title}
                                    </h3>
                                    <p className="initiative-date open-sans-font">{article.date}</p>
                                    <div
                                        className="article-body open-sans-font"
                                        dangerouslySetInnerHTML={{ __html: article.body }}
                                    />
                                </article>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Article;
