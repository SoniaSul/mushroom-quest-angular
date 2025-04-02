import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  exitGame() {
    alert("Exit werkt nog niet, maar dit is een placeholder.");
  }
}
