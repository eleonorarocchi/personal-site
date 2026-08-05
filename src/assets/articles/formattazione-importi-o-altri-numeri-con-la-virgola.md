---
title: "Formattazione importi o altri numeri con la virgola"
date: "2016-12-27"
slug: "formattazione-importi-o-altri-numeri-con-la-virgola"
wordpress_id: 17
---

Per formattare gli importi con la virgola, si può sfruttare il seguente formatter:
`NSNumberFormatter *myFormatter = [[NSNumberFormatter alloc] init];
myFormatter.numberStyle = NSNumberFormatterDecimalStyle;
myFormatter.minimumFractionDigits = 2;
myFormatter.usesSignificantDigits = NO;
myFormatter.usesGroupingSeparator = NO;
myFormatter.groupingSeparator = @"";
myFormatter.decimalSeparator = @",";`
`mioImporto.text = [NSString stringWithFormat:@"%@", [myFormatter stringFromNumber:riga.miovalore] ];`
Il risultato sarà un numero con la virgola per separare i decimali, e almeno due numeri decimali.
Viceversa, se voglio convertire un numero così formattato in NSDecimalNumber, senza perdere i decimali, devo aggiungere la dicitura `locale:NSLocale.currentLocale`:
`NSDecimalNumber *myDec = [NSDecimalNumber decimalNumberWithString:[self.valoreFormattato text] locale:NSLocale.currentLocale];`
