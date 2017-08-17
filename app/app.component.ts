import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>My Recipe Box</h1>
    <h3>{{tagline}}</h3>
    <ul>
      <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  tagline: string = 'A Collection of Delicious';
  recipes: Recipe[] = [
    new Recipe('Lazy Sunday Pasta'),
    new Recipe('Easy Lentil Soup'),
    new Recipe('Protein Pancakes')
  ];

}

export class Recipe {
  constructor(public title: string) { }
}
