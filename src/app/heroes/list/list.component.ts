import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public deletedHero?: string;
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hilk',
    'Thor',
  ];

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    console.log('Deleted hero:', this.deletedHero);
  }
}
