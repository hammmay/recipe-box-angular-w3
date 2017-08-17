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
    new Recipe('Lazy Sunday Pasta','Ingredients: noodles, peas, mint, basil, parmesan, cream','Directions: 1. Boil the pasta 2. Saute peas with parmesan and cream 3. Add pasta and herbs to pea mixure and mix'),
    new Recipe('Easy Lentil Soup','lentils, crushed tomatoes, garlic, celery, carrots, onion','1. Saute all veggies 2. Add tomatoes, water, lentils, and boil for an hour')
  ];

}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
