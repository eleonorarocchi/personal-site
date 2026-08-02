import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

if (googleAnalyticsId) {
  const existingScript = document.querySelector(`script[data-google-analytics="${googleAnalyticsId}"]`);

  if (!existingScript) {
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    gtagScript.setAttribute('data-google-analytics', googleAnalyticsId);
    document.head.appendChild(gtagScript);

    const inlineScript = document.createElement('script');
    inlineScript.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleAnalyticsId}', { send_page_view: false });
    `;
    document.head.appendChild(inlineScript);
  }
}
