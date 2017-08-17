import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>My Recipe Box</h1>
    <h3>{{tagline}}</h3>
    <ul>
      <li>{{firstRecipe.name}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  tagline: string = 'A Collection of Delicious';
  firstRecipe = {
    name: "Lazy Sunday Pasta"
  }
}
