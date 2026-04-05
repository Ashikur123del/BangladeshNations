import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, afterNextRender } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-hero-slide',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero-slide.html',
  styleUrl: './hero-slide.css',
})
export class HeroSlide {
  isBrowser = signal(false);

  constructor() {
    afterNextRender(() => {
      register();
      this.isBrowser.set(true);
    });
  }

  slides = signal([
    {
      img: 'banner.jpeg',
    },
    {
      category: 'Pollution and Waste',
      title: 'When food ends up in the trash, the planet pays the bill',
      desc: 'The world throws away about 1 billion tonnes of edible food yearly. Moving to circularity requires everyone to act together.',
      fact: 'Most food waste happens within households – about 79 kg per person per year.',
      img: 'hero-1.jpg',
      photoCredit: '©FAO/Miguel Schincariol'
    },
    {
      category: 'Humanitarian Crisis',
      title: 'Rising Civilian Toll in Sudan\'s Deadly War',
      desc: 'Fears are mounting for civilians caught up in Sudan\'s devastating conflict between rival militaries as attacks intensify and humanitarian access shrinks.',
      fact: 'Over 8 million people have been displaced — one of the world\'s largest displacement crises.',
      img: 'hero-2.jpg',
      photoCredit: '©UNOCHA/Adedeji Ademigbuji'
    },
    {
      category: 'Global Finance',
      title: 'Developing Countries Priced Out of Affordable Finance',
      desc: 'Sovereign credit ratings frequently overstate risk in developing nations, making essential financing for sustainable development nearly unattainable.',
      fact: 'External debt servicing now consumes over 38% of export revenues in many low-income countries.',
      img: 'hero-3.webp',
      photoCredit: '©UN Photo/Loey Felipe'
    },
   
  ]);
}