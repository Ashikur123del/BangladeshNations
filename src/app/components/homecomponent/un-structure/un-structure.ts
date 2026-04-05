import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-un-structure',
  standalone: true,
  imports: [],
  templateUrl: './un-structure.html',
  styleUrl: './un-structure.css',
})
export class UnStructure {
  // UN Structure Data Signal
  unOrgans = signal([
    {
      id: '01',
      name: 'General Assembly',
      img: 'St-1.png',
      desc: 'The General Assembly is the main deliberative, policymaking and representative organ of the UN. All 193 Member States of the UN are represented in the General Assembly, making it the only UN body with universal representation.'
    },
    {
      id: '02',
      name: 'Security Council',
      img: 'St-2.png',
      desc: 'Primary responsibility for the maintenance of international peace and security under the UN Charter.'
    },
    { 
      id: '03',
      name: 'Economic and Social Council',
      img: 'St-3.png',
      desc: 'The principal body for coordination, policy review and recommendations on economic and social issues.'
    },
    {
      id: '04',
      name: 'Trusteeship Council',
      img: 'St-4.png',
      desc: 'Established to provide international supervision for 11 Trust Territories and ensure their self-government.'
    },
    {
      id: '05',
      name: 'International Court of Justice',
      img: 'St-5.png',
      desc: 'The principal judicial organ of the UN. Its seat is at the Peace Palace in the Hague (Netherlands).'
    },
    {
      id: '06',
      name: 'Secretariat',
      img: 'St-6.png',
      desc: 'Comprises the Secretary-General and tens of thousands of staff who carry out the day-to-day work of the UN.'
    }
  ]);
}