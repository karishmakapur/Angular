
export class StarWarsService{
  private characters = [
    {name : 'Luke SkyWalker', side: ''},
    {name : 'Darth Vader', side: ''}
  ];

  getCharacters(chosenList){
    if(chosenList === 'all'){
      return this.characters.slice();
    }

    return this.characters.filter((char) => {
      return char.side === chosenList;

    });
  }
}
