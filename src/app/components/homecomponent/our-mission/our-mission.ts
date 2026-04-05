import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, afterNextRender } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-our-mission',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './our-mission.html',
  styleUrl: './our-mission.css',
})
export class OurMission {
  isBrowser = signal(false);

  constructor() {
    afterNextRender(() => {
      register();
      this.isBrowser.set(true);
    });
  }
  missionData = signal([
    {
      id: 1,
      title: 'Uphold International Law',
      image: 'M-1.jpg',
      desc: 'Uphold international law through the International Court of Justice.'
    },
    {
      id: 2,
      title: 'Protect Human Rights',
      image: 'M-2.jpg',
      desc: 'Protecting human rights is a central purpose of the United Nations.'
    },
    {
      id: 3,
      title: 'Deliver Humanitarian Aid',
      image: 'M1.jpg',
      desc: 'Delivering life-saving aid to people affected by conflicts and disasters.'
    },
    {
      id: 4,
      title: 'Promote Sustainable Development',
      image: 'M-4.jpg',
      desc: 'Sustainable development that meets the needs of the present without compromising the future.'
    },
    {
      id: 5,
      title: 'Maintain International Peace',
      image: 'M-5.avif',
      desc: 'Maintaining international peace and security is the highest priority of the United Nations.'
    }
  ]);
}