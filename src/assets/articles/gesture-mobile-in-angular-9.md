---
title: "Gesture mobile in Angular 9"
date: "2020-03-06"
slug: "gesture-mobile-in-angular-9"
wordpress_id: 382
---

In Angular (anche in Angular 9) per poter interagire con le gesture, sopratutto nel mobile, si utilizza una libreria apposita, HammerJs.

Anche per Angular9, dunque, si utilizza e per farlo occorre installarla come segue:

1. da console: > npm install hammerjs - save
2. nel file main.ts aggiungere l'importazione import "hammerjs"; // HAMMER TIME

Per poterlo testare possiamo inserire nel nostro demo.componen.html un div per lo swipe:

```
<div class="gesture__zone"  >
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
  </div>
  {{result}}
```

con il relativo relativo demo.componen.ts:

```
import { Component, OnInit } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import {takeWhile} from "rxjs/operators"

@Component({
  selector: 'app-demo',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class DemoComponent implements OnInit {
  alive:boolean=true;
  result:string;
  constructor() { }

  ngOnInit(): void {
    const hammerConfig = new HammerGestureConfig()
    const hammer=hammerConfig.buildHammer(document.documentElement)
    fromEvent(hammer, "swipe").pipe(
      takeWhile(()=>this.alive))
      .subscribe((res: any) => {
        this.result=res.deltaX<0?'to the left':'to the rigth'
    });
  }
  ngOnDestroy()
  {
    this.alive=false;
  }
}
```

ed il relativo css:

```
.gesture__zone {
    height: 100%;
}
```

Ho provato ad aggiungere un po' di complessità, volendo inserire:

- ben 3 diversi tab tra cui swippare
- un infinite scroll dentro uno dei tab

Trasformando quindi il mio codice, il componente demo diventa il seguente:

```
<div class="gesture__zone"  >
  <mat-tab-group  mat-stretch-tabs #tabGroup [selectedIndex]="selected" >
    <mat-tab [label]="'Tab 1'" >
      <div class="swipe-item-container">
        Content 1
      </div>
    </mat-tab>
    <mat-tab [label]="'Tab 2'" >

        <app-infinite-scroll></app-infinite-scroll>

    </mat-tab>
    <mat-tab [label]="'Tab 3'" >
      <div class="swipe-item-container">
        Content 3
      </div>
    </mat-tab>
  </mat-tab-group>
</div>
```

ed il relativo demo.component.ts:

```
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeWhile } from "rxjs/operators"
import { HammerGestureConfig } from '@angular/platform-browser';
import { HammerManager } from '@angular/material/core';
import * as Hammer from "hammerjs";

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement): HammerManager {
     return new Hammer.Manager(element, {
      touchAction: 'auto',
      inputClass: Hammer.TouchMouseInput, // sia mouse che touch su mobile
      recognizers: [
        [Hammer.Swipe, {
          direction: Hammer.DIRECTION_HORIZONTAL
        }]
      ]
    });
  }
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  alive:boolean=true;
  selected: number = 0;

  constructor() { }

  ngOnInit(): void {
    const hammerConfig = new MyHammerConfig()
    const hammer=hammerConfig.buildHammer(document.documentElement)
    fromEvent(hammer, "swipe").pipe(
      takeWhile(()=>this.alive))
      .subscribe((res: any) => {
        if ( res.deltaX < 0 ) { // to the left
          if(this.selected < 2)
            this.selected = this.selected + 1;
        }
        else { // to the rigth
          if(this.selected > 0)
            this.selected = this.selected - 1;
        }
    });
  }

  ngOnDestroy()
  {
    this.alive=false;
  }
}
```

attenzione anche al demo.component.css, che necessita di alcuni accorgimenti:

```
.gesture__zone, mat-tab-group {
    height: 100%;
}

::ng-deep .mat-tab-body-wrapper {
    flex: 1 1 100%;
}

.swipe-item-container {
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center
}
```

Ho aggiunto poi un componente infinite-scroll così composto:

```
<div class="process-list-container">
    <mat-list role="list"  infiniteScroll 
        [horizontal]="false"
        [infiniteScrollDistance]="2"
        [infiniteScrollUpDistance]="1.5"
        [infiniteScrollThrottle]="100"
        [alwaysCallback]="false"
        (scrolled)="onScrollDown($event)"
        [scrollWindow]="false" class="process-list">
        <mat-list-item role="listitem" *ngFor="let single of processList" routerLinkActive="router-link-active" >
            <div class="single-item">
               {{single.nome}}
            </div>
        </mat-list-item>
    </mat-list>
</div>
```

importantissimo il css in questo caso:

```
.process-list-container { /* necessario per infinite scroll */
    height:100%;
    display:flex;
}

.process-list { /* necessario per infinite scroll */
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
```

e il relativo infinite-scroll.component.ts

```
import { Component, OnInit } from '@angular/core';
import { Observable, of as observableOf  } from 'rxjs';
import { BasicProcessService } from './basic-process.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {
  isLoading$: Observable<boolean>;
  passo: number = 20;
  pageFrom: number = 0;
  pageTo: number = this.pageFrom + this.passo;
  continue: boolean = true;
  processList = new Array<ProcessItem>();

  constructor(private _service: BasicProcessService) { }

  ngOnInit(): void {
    this.caricaItem();
  }

  private caricaItem() {
    if(this.continue)
    {
      let dataInput: string = "{\"pageFrom\": " + this.pageFrom + ", \"pageTo\": " + this.pageTo + "}";

 
      var _this = this;
      this._service.getItemsList(JSON.parse(dataInput)).subscribe(response =>
        {
          _this.isLoading$ = observableOf(false);
          if(response.status == "SUCCESS")
          {
            if(response.content.length > 0)
            {
              _this.pageFrom = _this.pageTo;
              _this.pageTo = _this.pageTo + _this.passo;
              response.content.forEach(element => {
                
                _this.processList.push(element.nome);
              });

              if (response.content.length < _this.passo)
              _this.continue = false;

            } else 
            _this.continue = false;
          }

        }, err => { 
          this.isLoading$ = observableOf(false);
          console.log("Errore: " + err.message);
      }); 
    }
  }

  onScrollDown(e) {
    this.isLoading$ = observableOf(true);
    this.caricaItem();
  }

}

class ProcessItem {
  nome: string;
  constructor(nome?:string){
      this.nome = nome;
  }
}
```

Ovviamente nel mio progetto ho anche un service che si occupa della chiamata all'API che restituisce gli item da scrollare.

Attenzione: l'infinite scroll che ho qui descritto, si bassa su una libreria che si chiama *Angular Infinite Scroll* e che potete trovare [qui](https://www.npmjs.com/package/ngx-infinite-scroll). Per installarla comunque basta eseguire nel terminal il comando:

```
npm i ngx-infinite-scroll
```
