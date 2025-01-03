import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  constructor() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { name, email, phone, message } = form.value;
      console.log('Form Submitted:', name, email, phone, message);
      this.sendWhatsAppMessage(name, email, phone, message);
    }
  }

  sendWhatsAppMessage(name: string, email: string, phone: string, message: string) {
    const phoneNumber = '6379981909'; // Replace with the recipient's WhatsApp number
    const formattedMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank');
  }
}
