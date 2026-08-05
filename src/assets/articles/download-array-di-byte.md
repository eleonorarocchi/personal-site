---
title: "Download array di byte"
date: "2019-12-17"
slug: "download-array-di-byte"
wordpress_id: 292
---

Mi ritrovavo una pagina web con precaricato un elenco di file, sottoforma di array multidimensionale, con tanto di allegato in formato byte[].

Avevo la necessità di consentire di fare un download degli allegati, e avendo già l'array di byte[] di ciascuno, ho pensato di costruire la seguente funzione di download javascript:

```
function DownloadPrivateList_OnGetRowValues(row) {
    var dView = new Uint8Array(row);   // Converte i byte[] in array a 8-bit di inseri senza segno
    var arr = Array.prototype.slice.call(dView); // Lo trasforma in un tradizionale array
    var arr1 = arr.map(function (item) {
         return String.fromCharCode(item);    // Lo converte in stringa
    });
    var a = document.createElement('a');
    a.href = 'data:text/plain;base64,' + window.btoa(arr1.join(''));
    a.download = 'PrivateList.txt'; // TODO: Nome
    a.click();
}
```

E funziona!
