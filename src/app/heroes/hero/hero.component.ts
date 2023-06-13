import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 54;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Jose Leo';
  }

  changeAge():void{
    this.age = 34;
   }

  resetform():void{
    this.name = 'Ironman';
    this.age = 54;
   }
}
