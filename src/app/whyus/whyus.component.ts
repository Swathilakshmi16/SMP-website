import { Component } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrl: './whyus.component.scss'
})
export class WhyusComponent {



  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
  
  isHovered1 = false;
  isHovered2 = false;
  isHovered3 = false;
  isHovered4 = false;
  isHovered5 = false;
  isHovered6 = false;


  

}
