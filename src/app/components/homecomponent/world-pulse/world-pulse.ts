import { Component, signal } from '@angular/core';
import { Shearcart, SliderItem } from '../../sheardcomponent/shearcart/shearcart';

@Component({
  selector: 'app-world-pulse',
  standalone: true,
  imports: [Shearcart],
  templateUrl: './world-pulse.html',
  styleUrl: './world-pulse.css',
})
export class WorldPulse {

  newsData = signal<SliderItem[]>([
    {
      id: 1,
      category: 'HUMAN RIGHTS, GENEVA',
      title: 'Global Trends in Civil Liberties',
      image: 'w-1.png',
      desc: 'Our latest analysis shows a concerning decline in freedom of expression across 35 countries, prompting a call for renewed international commitment to basic rights.'
    },
    {
      id: 2,
      category: 'ENVIRONMENT, NAIROBI',
      title: 'Ocean Plastics Treaty Progress',
      image: 'w-2.png',
      desc: "Delegates have reached a preliminary agreement on reducing single-use plastic production by 2030, marking a historic step for marine conservation."
    },
    {
      id: 3,
      category: 'HEALTH, WHO',
      title: 'Digital Health Revolution in Rural areas',
      image: 'w-3.jpg',
      desc: 'New mobile health initiatives are connecting millions in remote regions to specialist care, significantly reducing maternal mortality rates in South Asia.'
    },
    {
      id: 4,
      category: 'ECONOMY, IMF',
      title: 'Addressing the Global Debt Vulnerability',
      image: 'w-4.png',
      desc: 'Low-income nations are facing unprecedented debt servicing costs, threatening to derail progress on sustainable development goals and climate action.'
    }
  ]);
}
