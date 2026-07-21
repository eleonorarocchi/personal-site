const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    console.log('Opening http://localhost:3000 ...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

    // Check section title
    await page.waitForSelector('text=IL MIO SPAZIO DI RICERCA', { timeout: 10000 });

    // Scroll down and verify the research section remains readable
    await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
    await page.waitForTimeout(500);

    // Check column headers
    const headers = ['Agent Engineering', 'AI Evaluation', 'Software Architecture'];
    for (const h of headers) {
      const el = await page.$(`text=${h}`);
      if (!el) throw new Error(`Header not found: ${h}`);
    }

    // Save screenshot after scrolling
    await page.screenshot({ path: 'build/research-section-check.png', fullPage: true });
    console.log('OK: research section and columns found. Screenshot saved to build/research-section-check.png');
    await browser.close();
    process.exit(0);
  } catch (e) {
    console.error('ERROR:', e.message);
    try { await page.screenshot({ path: 'build/research-section-error.png', fullPage: true }); } catch {}
    await browser.close();
    process.exit(1);
  }
})();
