---
title: "MSSQL: Cambiare tutti i Sinonimi con una query"
date: "2017-10-05"
slug: "mssql-cambiare-tutti-i-sinonimi-con-una-query"
wordpress_id: 124
---

DECLARE @ObjectName sysname, @Definition VARCHAR(MAX), @Schema VARCHAR(50)
DECLARE @SQL VARCHAR(MAX)
DECLARE loccur CURSOR LOCAL STATIC FORWARD\_ONLY READ\_ONLY FOR
SELECT name, SCHEMA\_NAME(schema\_id), base\_object\_name FROM sys.synonyms
OPEN loccur
FETCH NEXT FROM loccur INTO @ObjectName, @Schema, @Definition
WHILE @@FETCH\_STATUS = 0
BEGIN
PRINT 'Converting: Synonym, ' + @ObjectName
SET @SQL = 'DROP SYNONYM ' + QUOTENAME(@Schema) + '.' + QUOTENAME(@ObjectName)
EXEC(@SQL)
SET @SQL = 'CREATE SYNONYM ' + QUOTENAME(@Schema) + '.' + QUOTENAME(@ObjectName) + ' FOR ' +
REPLACE(@Definition, '[OldDbName].', '[NewDbName].')
EXEC(@SQL)
FETCH NEXT FROM loccur INTO @ObjectName, @Schema, @Definition
END
CLOSE loccur
DEALLOCATE loccur
