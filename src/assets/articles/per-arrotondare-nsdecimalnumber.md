---
title: "Per arrotondare NSDecimalNumber"
date: "2017-10-10"
slug: "per-arrotondare-nsdecimalnumber"
wordpress_id: 128
---

`NSDecimalNumberHandler *roundUp = [NSDecimalNumberHandler decimalNumberHandlerWithRoundingMode:NSRoundUp scale:0 raiseOnExactness:YES raiseOnOverflow:YES raiseOnUnderflow:YES raiseOnDivideByZero:YES];`
`[myNymber decimalNumberByRoundingAccordingToBehavior:roundUp];`
