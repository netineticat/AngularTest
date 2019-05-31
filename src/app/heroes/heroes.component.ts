//Componentシンボルのインポート。必須
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES}from '../mock-heroes'

//コンポーネントクラスには@Componentで注釈を付ける
@Component({
  //コンポーネントのCSS要素セレクター
  //'app-heroes'は親コンポーネントのテンプレート内で
  //このコンポーネントを識別するHTML要素の名前と一致する
  selector: 'app-heroes',
  //コンポーネントのテンプレートファイルの場所
  templateUrl: './heroes.component.html',
  //コンポーネントのプライベートCSSスタイルの場所
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }
  heroes = HEROES;
}
