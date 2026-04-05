import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactPage {
  contactInfo = [
    { label: 'Address', value: 'NHCRF House, Dhaka-1000, Bangladesh', icon: 'fa-solid fa-location-dot' },
    { label: 'Phone', value: '+880 1XXX-XXXXXX', icon: 'fa-solid fa-phone' },
    { label: 'Email', value: 'info@nhcrf.org.bd', icon: 'fa-solid fa-envelope' },
    { label: 'Office Hours', value: 'Saturday – Thursday, 9AM – 5PM', icon: 'fa-solid fa-clock' },
  ];
}
