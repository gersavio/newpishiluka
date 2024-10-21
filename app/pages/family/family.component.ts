import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'family',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './family.component.html',
  styleUrl: './family.component.css'
})
export class FamilyComponent {
  playSound(primos: string): void {
    const sound = new Audio();
   sound.src = "assets/sounds/primos/" + primos + ".mp3";
   sound.play();
 }
}
