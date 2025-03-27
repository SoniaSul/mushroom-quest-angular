import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  exitGame() {
    alert("Exit werkt nog niet, maar dit is een placeholder.");
  }
}
