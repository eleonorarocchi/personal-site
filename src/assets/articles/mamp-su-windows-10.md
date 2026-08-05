---
title: "MAMP su Windows 10"
date: "2019-12-17"
slug: "mamp-su-windows-10"
wordpress_id: 296
---

La versione 4.1.1 non funziona.

Occorre installare la 4.1

Come descritto in <https://stackoverflow.com/questions/58123543/mamp-on-windows-10-apache-server-starts-and-then-stops>

1. Turn off your MAMP Server.
2. Locate your db folder for mysql. Example: C:\MAMP\db\mysql
3. Rename the mysql-bin.index file to mysql-bin\_old.index (or anything really)
4. Turn on your MAMP Server

This is a very common issue with MAMP. If this happened to you out of the blue, this is probably the fix.
