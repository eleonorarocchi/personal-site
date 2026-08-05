---
title: "Load image into DB"
date: "2019-05-06"
slug: "load-image-into-db"
wordpress_id: 174
---

Può succedere a volte che serva caricare dei file immagine nel DB ma non sia abbia ancora modo di sviluppare un componente software per farlo.

SQL Server ci viene in aiuto, sfruttando le seguenti istruzioni:

```
SELECT * 
INTO TMPIMG
FROM OPENROWSET(BULK N'C:\MyData\Foto\pluto.jpg', SINGLE_BLOB) AS img_dataM

insert into MyNewTab
select 'pluto.jpg', BulkColumn , GETDATE(), 4
FROM TMPIMG

DROP TABLE TMPIMG;

select *,  LEN(FileBytes)
from MyNewTab
```
