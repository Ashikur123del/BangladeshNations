import { Component } from '@angular/core';

@Component({
  selector: 'app-global-page',
  standalone: true,
  imports: [], // CommonModule বাদ দেওয়া হয়েছে
  templateUrl: './global.html',
  styleUrls: ['./global.css']
})
export class GlobalPage { 
  issues = [
    {
      title: 'Climate Change',
      desc: 'Rising temperatures, extreme weather, and rising sea levels threaten communities worldwide — especially vulnerable nations like Bangladesh.',
      icon: 'fa-solid fa-cloud-sun-rain',
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Human Rights',
      desc: 'Protecting civil liberties, freedom of expression, and the rights of all individuals regardless of race, religion, or gender.',
      icon: 'fa-solid fa-hands-holding-circle',
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-700'
    },
    {
      title: 'Refugee Crisis',
      desc: 'Over 100 million people are forcibly displaced globally. Access to shelter, food, education, and legal protection remains critical.',
      icon: 'fa-solid fa-person-shelter',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      title: 'Poverty & Hunger',
      desc: '839 million people survive on less than $3 per day. Ending poverty remains the cornerstone of the UN Sustainable Development Goals.',
      icon: 'fa-solid fa-wheat-awn',
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Gender Equality',
      desc: 'Women and girls face systemic barriers to education, economic opportunity, and political participation in every region of the world.',
      icon: 'fa-solid fa-venus-mars',
      color: 'bg-pink-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      title: 'Rule of Law',
      desc: 'Strong, independent legal institutions and access to justice are fundamental for sustainable peace and development.',
      icon: 'fa-solid fa-scale-balanced',
      color: 'bg-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-700'
    }
  ];
}