import { Component } from '@angular/core';

@Component({
  selector: 'app-membership-page',
  standalone: true,
  imports: [],
  templateUrl: './membership.html',
  styleUrls: ['./membership.css']
})
export class MembershipPage {
  
  divisions = [
    'Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur', 'Mymensingh'
  ];
}
  