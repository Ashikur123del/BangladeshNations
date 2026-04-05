import { Component } from '@angular/core';

@Component({
  selector: 'app-global-facts',
  standalone: true,
  imports: [], 
  templateUrl: './global-facts.html',
})
export class GlobalFacts {
  facts = [
    {
      text: 'National territorial boundaries extend 12 miles (19 kilometres) offshore.',
      linkText: 'GLOBAL ISSUES: OCEANS / THE LAW OF THE SEA',
      bgColor: 'bg-[#3b4559]',
      image: 'Know.svg' 
    },
    {
      text: 'In 2024, 839 million people around the world were subsisting on less than $3 per day.',
      linkText: 'GLOBAL ISSUES: ENDING POVERTY',
      bgColor: 'bg-[#5672a3]',
      image: 'know-1.svg' 
    },
    {
      text: 'The United Nations provides electoral assistance to approximately 60 countries each year.',
      linkText: 'GLOBAL ISSUES: DEMOCRACY',
      bgColor: 'bg-[#2a5e87]',
      image: 'know-3.svg' 
    },
    {
      text: 'The advocacy of racial or religious hatred is prohibited by international law.',
      linkText: 'GLOBAL ISSUES: HUMAN RIGHTS',
      bgColor: 'bg-[#616161]',
      image: 'know-4.svg' 
    }
  ];
} 