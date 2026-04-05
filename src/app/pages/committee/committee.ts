import { Component } from '@angular/core';

@Component({
  selector: 'app-committee-page',
  standalone: true,
  imports: [],
  templateUrl: './committee.html',
  styleUrls: ['./committee.css']
})
export class CommitteePage {
  central = [
    { name: 'Md. Rafiqul Islam', role: 'Chairman', division: 'Central Committee — Dhaka' },
    { name: 'Nasrin Akter', role: 'Vice Chairman', division: 'Central Committee — Chittagong' },
    { name: 'Aminul Haque', role: 'Secretary General', division: 'Central Committee — Dhaka' },
    { name: 'Fatema Khatun', role: 'Finance Secretary', division: 'Central Committee — Rajshahi' },
    { name: 'Karim Uddin', role: 'Legal Advisor', division: 'Central Committee — Khulna' },
    { name: 'Sharmin Akhter', role: 'Media Secretary', division: 'Central Committee — Sylhet' },
  ];
}
