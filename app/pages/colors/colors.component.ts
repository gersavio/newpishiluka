import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'colors',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.css'
})
export class ColorsComponent {
  timeout: any;
  double: boolean = false;

  playSound(color: string) {
    if(this.double === true) {
      clearTimeout(this.timeout);
      const sound = new Audio();
      sound.src = "assets/sounds/" + color + "" + color + ".mp3";
      sound.play();
      this.double = false;
    } else {
      this.timeout = setTimeout(() => {
        const sound = new Audio();
        sound.src = "assets/sounds/" + color + ".mp3";
        sound.play();
        this.double = false;
      }, 200);
      this.double = true;
    }
  }
}

