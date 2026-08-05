---
title: "Stored procedure: ricerca utilizzo tabelle o campi"
date: "2017-10-13"
slug: "stored-procedure-ricerca-utilizzo-tabelle-o-campi"
wordpress_id: 131
---

Per ottenere tutte le stored procedure che utilizzano una tabella, o un campo, è possibile utilizzare la seguente query:
`SELECT Name
FROM sys.procedures
WHERE OBJECT_DEFINITION(OBJECT_ID) LIKE '%TableNameOrWhatever%'`
