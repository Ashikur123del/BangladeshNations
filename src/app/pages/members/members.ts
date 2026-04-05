import { Component } from '@angular/core';

@Component({
  selector: 'app-members-page',
  standalone: true,
  imports: [],
  templateUrl: './members.html',
  styleUrls: ['./members.css']
})
export class MembersPage {
  stats = [
    { value: '64', label: 'Districts' },
    { value: '1,200+', label: 'Active Members' },
    { value: '8', label: 'Divisions' },
    { value: '500+', label: 'Cases Reported' },
  ];

  divisions = [
    { name: 'Dhaka', districts: 13, members: 280, pct: '85%' },
    { name: 'Chittagong', districts: 11, members: 210, pct: '70%' },
    { name: 'Rajshahi', districts: 8, members: 145, pct: '55%' },
    { name: 'Khulna', districts: 10, members: 160, pct: '60%' },
    { name: 'Barisal', districts: 6, members: 95, pct: '40%' },
    { name: 'Sylhet', districts: 4, members: 120, pct: '45%' },
    { name: 'Rangpur', districts: 8, members: 100, pct: '40%' },
    { name: 'Mymensingh', districts: 4, members: 90, pct: '35%' },
  ];
}
