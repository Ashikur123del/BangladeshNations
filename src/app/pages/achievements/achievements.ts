import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements-page',
  standalone: true,
  imports: [],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.css']
})
export class AchievementsPage {
  stats = [
    { value: '500+', label: 'Cases Resolved' },
    { value: '12K+', label: 'People Helped' },
    { value: '64', label: 'Districts Reached' },
    { value: '10+', label: 'Years Active' },
  ];

  timeline = [
    { year: '2014', title: 'Foundation Established', desc: 'NHCRF was formally registered and began operations in Dhaka with an initial team of 20 volunteers.' },
    { year: '2016', title: 'National Expansion', desc: 'Expanded presence to all 8 divisions of Bangladesh, establishing divisional committees across the country.' },
    { year: '2018', title: 'UN Recognition', desc: 'Received consultative status with the UN Human Rights Council, granting access to international advocacy platforms.' },
    { year: '2020', title: '1,000 Cases Milestone', desc: 'Successfully documented and reported over 1,000 human rights cases, with significant legal outcomes for victims.' },
    { year: '2022', title: 'Digital Complaint Platform', desc: 'Launched an online complaint submission system, making it easier for citizens to report violations from anywhere.' },
    { year: '2024', title: 'International Award', desc: 'Received the South Asia Human Rights Award for outstanding contribution to rights protection and advocacy.' },
  ];
}
