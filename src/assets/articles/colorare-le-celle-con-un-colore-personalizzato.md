---
title: "Colorare le celle con un colore personalizzato"
date: "2017-01-30"
slug: "colorare-le-celle-con-un-colore-personalizzato"
wordpress_id: 59
---

Avevo bisogno di colorare le celle di una riga della mia TableView, con un colore non predefinito ma custom.
Lo dovevo fare sfruttando il metodo
`-(NSObject *)changeObject:(NSObject *)object forRow:(NSIndexPath *)indexPath forColumn:(ColumnEntity *)column`
assegnando pertanto il colore alla view della cella.
Il colore quindi va impostato nel seguente modo:
`UIColor *coloreDaTestate = [UIColor colorWithRed:0.89 green:0.86 blue:0.74 alpha:0.2f];`
Per identificare la tonalità desiderata è molto comodo utilizzare il sito <http://uicolor.xyz/#/hex-to-ui>
NB: attenzione che se si vuole impostare una trasparenza, bisogna indicare il formato float per i decimali!
