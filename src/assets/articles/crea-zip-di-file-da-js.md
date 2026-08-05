---
title: "Crea zip di file da JS"
date: "2019-12-17"
slug: "crea-zip-di-file-da-js"
wordpress_id: 294
---

Ma sarà mai possibile creare uno zip contenente file, generati a partire da array di byte[] in javascript?

Certo che sì! Utilizzando una comodissima libreria Js, [JSZip](https://stuk.github.io/jszip).

Ecco un esempio di codice:

```
var zip = new JSZip();
for (var i = 0; i < row.length; i++) {
    var dView = new Uint8Array(row[i][1]);   // Converte i byte[] in array a 8-bit di interi senza segno
    nvar arr = Array.prototype.slice.call(dView); // Lo trasforma in un tradizionale array
    var arr1 = arr.map(function (item) {
       return String.fromCharCode(item);    // Lo converte in stringa
    });
    zip.add(row[i][0], window.atob(window.btoa(arr1.join(''))) );
}
content = zip.generate();
location.href = "data:application/zip;base64," + content;
```
