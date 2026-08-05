---
title: "La disperazione di Android (e iOs, ma meno) con protoccolli https, Basic Authentication e certificati autogenerati."
date: "2018-05-29"
slug: "la-disperazione-di-android-e-ios-ma-meno-con-protoccolli-https-basic-authentication-e-certificati-autogenerati"
wordpress_id: 149
---

Se anche tu come me devi aprire nella tua app un url di un sito esterno, con protocollo https con certificato autogenerato e con la basic authentication pure... sai di che disperazione sto parlando.
Ma si può fare!

#### Android

`final String url = "https://www.ilmiositodifficiledaaccedere.it"
if (url == null || url.isEmpty()) finish();
WebView webView = (WebView) findViewById(R.id.activity_webview);
webView.getSettings().setJavaScriptEnabled(true);
webView.loadUrl(url);`
Dopo aver definito la webview che serve, dicendole di caricare la pagina web, sono necessarie alcune altre operazioni.
Con questo blocco di codice si vanno a definire principalmente username e password da utilizzare per l'accreditamento, e di ignorare eventuali errori di certificato:
`webView.setWebViewClient(new WebViewClient() {
@Override
public void onReceivedHttpAuthRequest(WebView view,
HttpAuthHandler handler, String host, String realm) {
handler.proceed("myuser", "mypassword");
}
@Override
public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
handler.proceed(); // Ignore SSL certificate errors
}
@Override
public boolean shouldOverrideUrlLoading(WebView view, String url) {
view.loadUrl(url);
return true;
}
});`
Se poi nella pagina web si volesse aprire un documento linkato, è necessaria un'ulteriore verifica sui certificati:
webView.setDownloadListener(new DownloadListener() {
`@Override
public void onDownloadStart(final String url, String userAgent, final String contentDescription, String mimetype, long contentLength) {
final Toast toast = Toast.makeText(getApplicationContext(), "Download in corso...", Toast.LENGTH_LONG);
toast.show();
Thread thread = new Thread(new Runnable(){
@Override
public void run()
{
try {
final TrustManager[] trustAllCerts = new TrustManager[] {
new X509TrustManager() {
@Override
public void checkClientTrusted(java.security.cert.X509Certificate[] chain, String authType) throws CertificateException {
}
@Override
public void checkServerTrusted(java.security.cert.X509Certificate[] chain, String authType) throws CertificateException {
}
@Override
public java.security.cert.X509Certificate[] getAcceptedIssuers() {
return new java.security.cert.X509Certificate[0];
}
}
};
SSLContext sc = SSLContext.getInstance("SSL");
sc.init(null, trustAllCerts, new java.security.SecureRandom());
HttpsURLConnection c = (HttpsURLConnection) new URL(url).openConnection();
c.setSSLSocketFactory(sc.getSocketFactory());
String credentials = Credentials.basic("myusername", "mypassword");
c.setRequestProperty("Authorization", credentials);
c.connect();
...`
