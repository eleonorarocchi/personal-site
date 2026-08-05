const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ARTICLES_DIR = path.join(__dirname, '..', 'src', 'assets', 'articles');

const parseFrontMatter = (content) => {
  const frontMatterMatch = content.match(/^---\s*([\s\S]*?)\s*---/);

  if (!frontMatterMatch) {
    return {};
  }

  return frontMatterMatch[1].split('\n').reduce((acc, line) => {
    const match = line.match(/^([a-zA-Z_]+):\s*(.*)$/);

    if (match) {
      acc[match[1].trim()] = match[2].trim().replace(/^['"]|['"]$/g, '');
    }

    return acc;
  }, {});
};

module.exports = async function handler(req, res) {
  const slug = String(req.query.slug || '').trim();

  if (!slug) {
    return res.status(400).json({ error: 'Missing article slug' });
  }

  const fileName = fs.readdirSync(ARTICLES_DIR).find(file => {
    const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
    const frontMatter = parseFrontMatter(content);
    return (frontMatter.slug || file.replace(/\.md$/, '')) === slug;
  });

  if (!fileName) {
    return res.status(404).json({ error: 'Article not found' });
  }

  const filePath = path.join(ARTICLES_DIR, fileName);
  const content = fs.readFileSync(filePath, 'utf8');
  const frontMatter = parseFrontMatter(content);
  const body = content.replace(/^---\s*[\s\S]*?---\s*/, '').trim();

  return res.status(200).json({
    title: frontMatter.title || fileName.replace(/\.md$/, '').replace(/-/g, ' '),
    date: frontMatter.date || '',
    slug,
    body: marked(body),
  });
};
