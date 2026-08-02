const fetch = require('node-fetch');

module.exports = async function handler(req, res) {
  const AIRTABLE_API_URL = process.env.AIRTABLE_API_URL || 'https://api.airtable.com/v0';
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
    console.error('Airtable env configuration missing');
    return res.status(500).json({
      error: 'Missing Airtable configuration',
    });
  }

  try {
    const endpoint = `${AIRTABLE_API_URL}/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}?view=Grid%20view`;
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Airtable request failed', {
        status: response.status,
        statusText: response.statusText,
      });

      return res.status(response.status).json({
        error: 'Airtable request failed',
      });
    }

    const payload = await response.json();

    return res.status(200).json({
      records: payload.records || [],
    });
  } catch (error) {
    console.error('Unexpected Airtable error', error);
    return res.status(500).json({
      error: 'Unexpected error while fetching Airtable records',
    });
  }
};
