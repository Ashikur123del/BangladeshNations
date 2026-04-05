import { Component, signal } from '@angular/core';
import { Shearcart, SliderItem } from '../../sheardcomponent/shearcart/shearcart';

@Component({
  selector: 'app-featured-goal',
  standalone: true,
  imports: [Shearcart], 
  templateUrl: './featured-goal.html',
  styleUrl: './featured-goal.css',
})
export class FeaturedGoal {

  // ডাটাগুলো এখানে ডিফাইন করুন
  goalsData = signal<SliderItem[]>([
   {
      id: '01',
      title: 'ActNow Campaign',
      image: 'gol-1.png', 
      desc: 'The Goals can improve life for all of us. Cleaner air. Safer cities. Equality. Better jobs. These issues matter to everyone. But progress is too slow. We have to act, urgently, to accelerate changes that add up to better lives on a healthier planet. Find new inspiring actions on the app and at un.org/actnow.',
      link: 'https://un.org/actnow',
      isHighlight: false
    },
    {
      id: '02',
      title: 'Act Now for a Peaceful World',
      image: 'gol-2.jpg',
      desc: 'Today, half the world is under 30, and this generation is a powerful force for peace. The UN "Hear Us. Act Now for a Peaceful World" campaign, launched on the International Day of Peace, aims to include, invest in, and partner with young people to build lasting peace. ',
      link: '#',
      isHighlight: false
    },
    {
      id: '03',
      title: 'SDG Book Club',
      image: 'gol-3.jpg',
      desc: 'Reading and learning are essential to children’s growth and development; stories can fuel their imagination and raise awareness of new possibilities. The SDG Book Club aims to encourage them to learn about the Goals in a fun, engaging way, empowering them to make a difference.',
      link: '#',
      isHighlight: false
    },
    {
      id: '04', // এটিই স্ক্রিনশটের মতো হাইলাইট হবে
      title: 'Gender Equality',
      image: 'gol-4.png',
      desc: 'Achieve gender equality and empower all women and girls.',
      link: '#',
      isHighlight: 'GOAL OF THE MONTH 5'
    },
    {
      id: '05',
      title: 'Global Issues',
      image: 'gol-5.jpg',
      desc: 'From climate change to migration and human rights, we address the most pressing issues facing our world today to promote prosperity.',
      link: '#',
      isHighlight: false
    }
  ]);
}