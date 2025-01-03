import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  sendWhatsAppMessage() {
    const phoneNumber = 'PHONE_NUMBER'; 
    const message = 'Hello, I would like to submit my form'; 
    const url = `https://wa.me/${934495437}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
