---
title: "Modificare il colore di highlight di un UIButton"
date: "2017-01-31"
slug: "modificare-il-colore-di-highlight-di-un-uibutton"
wordpress_id: 62
---

Stavo implementando in una vista una sorta di cruscotto con dati statistici riepilogativi. La necessità era che tali dati fossero cliccabili, portando alla view di dettaglio.
Ho pensato allora di posizionare sopra un enorme UIButton trasparente, che potesse ricoprire tutto e al tap portarmi alla view desiderata. Purtroppo, essendo il tasto trasparente, non sono riuscita a impostare le caratteristiche standard in modo che al tap ci fosse una sorta di evidenza del focus sul tastone.
Hp trovato la soluzione con qualche ricerca in rete, sfruttando un'estensione scritta da Ondrej Rafaj.
Basta quindi riportare nel sorgente le seguenti classi:
`//
// FTCustomButton.h
// FTLibrary
//
// Created by Ondrej Rafaj on 14/01/2013.
// Copyright (c) 2013 Fuerte International. All rights reserved.
//`
#import <UIKit/UIKit.h>
@interface FTCustomButton : UIButton
@property (nonatomic, strong, readonly) UIColor \*normalColor;
@property (nonatomic, strong, readonly) UIColor \*highlightedColor;
- (void)setNormalColor:(UIColor \*)normalColor;
- (void)setHighlightedColor:(UIColor \*)highlightedColor;
@end
`//
// FTCustomButton.m
// FTLibrary
//
// Created by Ondrej Rafaj on 14/01/2013.
// Copyright (c) 2013 Fuerte International. All rights reserved.
//`
#import "FTCustomButton.h"
@implementation FTCustomButton
#pragma mark Settings
- (void)setNormalColor:(UIColor \*)normalColor {
[self setBackgroundColor:normalColor];
\_normalColor = normalColor;
}
- (void)setHighlightedColor:(UIColor \*)highlightedColor {
\_highlightedColor = highlightedColor;
}
#pragma mark Actions
- (void)didTapButtonForHighlight:(UIButton \*)sender {
[self setBackgroundColor:\_highlightedColor];
}
- (void)didUnTapButtonForHighlight:(UIButton \*)sender {
[self setBackgroundColor:\_normalColor];
}
#pragma mark Initialization
- (void)setupButton {
[self addTarget:self action:@selector(didTapButtonForHighlight:) forControlEvents:UIControlEventTouchDown];
[self addTarget:self action:@selector(didUnTapButtonForHighlight:) forControlEvents:UIControlEventTouchUpInside];
[self addTarget:self action:@selector(didUnTapButtonForHighlight:) forControlEvents:UIControlEventTouchUpOutside];
}
- (id)init {
self = [super init];
if (self) {
[self setupButton];
}
return self;
}
- (id)initWithCoder:(NSCoder \*)aDecoder {
self = [super initWithCoder:aDecoder];
if (self) {
[self setupButton];
}
return self;
}
- (id)initWithFrame:(CGRect)frame {
self = [super initWithFrame:frame];
if (self) {
[self setupButton];
}
return self;
}
@end
e definire nella storyboard la classe per il button interessato:
![ftcusombutton](http://www.eleonorarocchi.it/wp-content/uploads/2017/01/ftcusombutton.png)
e il gioco è fatto!
