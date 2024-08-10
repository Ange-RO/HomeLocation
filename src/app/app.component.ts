import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<h1>Bienvenue sur le site de l'immobilier</h1>
    <header class="brand-name">
     
      <section>
        <form>
          <input type="text" placeholder="Filter by city" #filter />
          <button class="primary" type="button"  >Search</button>
        </form>
      </section>
    </header>

    <main>
      <app-home></app-home>
    </main> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HomeLocation';
}
