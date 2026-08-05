import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

export default async function handler(req, res) {
    try {
        const slug = Array.isArray(req.query.slug)
            ? req.query.slug[0]
            : req.query.slug;

        if (!slug) {
            return res.status(400).json({
                error: 'Slug mancante',
            });
        }

        if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
            return res.status(400).json({
                error: 'Slug non valido',
            });
        }

        const articlesDirectory = path.join(
        process.cwd(),
            'src',
            'assets',
            'articles'
        );

        const filePath = path.join(
            articlesDirectory,
            `${slug}.md`
        );

        console.log('Cerco il file:', filePath);

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                error: 'Articolo non trovato',
                filePath,
            });
        }

        const markdownFile = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(markdownFile);

        return res.status(200).json({
            title: data.title || '',
            date: data.date || '',
            slug,
            body: marked.parse(content),
        });
    } catch (error) {
        console.error('Errore API article:', error);

        return res.status(500).json({
            error: error instanceof Error
                ? error.message
                : String(error),
        });
    }
}