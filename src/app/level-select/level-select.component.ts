import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-level-select',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './level-select.component.html',
  styleUrl: './level-select.component.css'
})
export class LevelSelectComponent {
  levels = [
    { number: 1, locked: false },
    { number: 2, locked: false },
    { number: 3, locked: false },
    { number: 4, locked: false },
    { number: 5, locked: false },
    { number: 6, locked: false },
    { number: 7, locked: false },
    { number: 8, locked: false },
    { number: 9, locked: false },
    { number: 10, locked: false },
    { number: 11, locked: false },
    { number: 12, locked: false },
    { number: 13, locked: true },
    { number: 14, locked: true },
    { number: 15, locked: true },
  ];
}
