import { Component, input, CUSTOM_ELEMENTS_SCHEMA, signal, afterNextRender } from '@angular/core';
import { register } from 'swiper/element/bundle';

export interface SliderItem {
  id: string | number;
  title: string;
  image: string;
  desc: string;
  link?: string;
  isHighlight?: string | boolean;
  category?: string;
  topBadge?: string;
  dateText?: string;
}

@Component({
  selector: 'app-shearcart',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './shearcart.html',
  styleUrl: './shearcart.css',
})

export class Shearcart {
  isBrowser = signal(false);

  constructor() {
    afterNextRender(() => {
      register();
      this.isBrowser.set(true);
    });
  }
  layout = input<'slider' | 'list' | 'news-grid'>('slider');
  
  sectionTitle = input<string>('');
  sectionSpan = input<string>('');
  sectionSubTitle = input<string>('');
  sectionDesc = input<string>('');
  logoSrc = input<string>('');
  buttonText = input<string>('');
  
  slidesData = input.required<SliderItem[]>();
}
