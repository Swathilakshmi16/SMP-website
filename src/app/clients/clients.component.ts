import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  images = [
    { "imageUrl": "Group 1.png"  },
    { "imageUrl": "Group 2.png" },
    { "imageUrl": "Group 3.png" },
    { "imageUrl": "Group 4.png"  },
    { "imageUrl": "Group 5.png" },
    { "imageUrl": "Group 6.png" },
    { "imageUrl": "Group 10.png" },
  ];

}