import { Component, OnInit } from '@angular/core';
import {StarWarsService } from '../star-wars.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters=[];
  chosenList = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  getCharacters(){
    const swService = new StarWarsService();
    this.characters = swService.getCharacters(this.chosenList);
    return this.characters;
  }

  onChoose(side){
    this.chosenList = side;
  }

  onSideChosen(charInfo){
    const pos = this.characters.findIndex((char) =>{
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
  }
}
