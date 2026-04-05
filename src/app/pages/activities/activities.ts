import { Component } from '@angular/core';

@Component({
  selector: 'app-activities-page',
  standalone: true,
  imports: [],
  templateUrl: './activities.html',
  styleUrls: ['./activities.css']
})
export class ActivitiesPage {
  activities = [
    {
      title: 'Human Rights Reporting Workshop',
      category: 'Workshop',
      date: 'March 20, 2026',
      image: 'h-1.jpg',
      desc: 'Training for divisional members on effective reporting of human rights crimes and gathering legal evidence.'
    },
    {
      title: 'Legal Aid for Vulnerable Communities',
      category: 'Legal Aid',
      date: 'March 15, 2026',
      image: 'h-2.jpg',
      desc: 'Providing free legal consultations to over 50 families across Rajshahi division regarding land rights and arbitrary detention.'
    },
    {
      title: 'Awareness Campaign on Child Rights',
      category: 'Awareness',
      date: 'March 10, 2026',
      image: 'h-3.jpg',
      desc: 'School visitor program in Dhaka to educate young people about their fundamental rights and protection laws.'
    },
    {
      title: 'Annual Human Rights Achievement Summit',
      category: 'Event',
      date: 'Feb 28, 2026',
      image: 'Gal-1.jpg',
      desc: 'Gathering of divisional representatives to celebrate milestones and plan strategy for the upcoming year.'
    },
    {
      title: 'Field Investigation on Forced Labor',
      category: 'Investigation',
      date: 'Feb 15, 2026',
      image: 'Gal-2.jpg',
      desc: 'A comprehensive report detailing environmental and labor concerns in coastal industrial areas.'
    },
    {
      title: 'Global Outreach Symposium',
      category: 'Symposium',
      date: 'Feb 05, 2026',
      image: 'M-1.jpg',
      desc: 'Collaborating with international partners to align local efforts with global sustainable development goals.'
    }
  ];
}
