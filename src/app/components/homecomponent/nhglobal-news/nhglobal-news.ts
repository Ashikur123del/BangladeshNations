import { Component, signal } from '@angular/core';
import { Shearcart, SliderItem } from '../../sheardcomponent/shearcart/shearcart';

@Component({
  selector: 'app-nhglobal-news',
  standalone: true,
  imports: [Shearcart],
  templateUrl: './nhglobal-news.html',
})
export class NHGlobalNews {

  mainTitle = signal('More from the United Nations');
  description = signal('Featured stories from across the United Nations and our world-wide family of agencies, funds, and programmes.');

  newsData = signal<SliderItem[]>([
    {
      id: 1,
      category: 'SDG 6: CLEAN WATER, UNDP',
      title: 'The Ripple Effect',
      image: 'N-1.jpg',
      desc: 'Angele is helping transform Benin\'s rice sector, showing how targeted support can improve local nutrition and compete with imports. IFAD\'s main funding comes from core contributions, which support long-term rural development, while extra funds from partners like Norway help focus on specific priorities, such as better nutrition.'
    },
    {
      id: 2,
      category: 'OCEAN SCIENCE, FAO',
      title: 'Scientists Venture to Uncharted Ocean Waters',
      image: 'N-2.jpg',
      desc: 'Seeking data to advance marine research, scientist Marco Milardi took part in a trip of a lifetime to the international waters of the Southwest Indian Ocean. He was one of over 20 scientists from 11 countries on the R/V Dr. Fridtjof Nansen, a vessel operated as part of the EAF-Nansen Programme.'
    },
    {
      id: 3,
      category: 'EDUCATION, UNESCO',
      title: '273 Million Children Out of School',
      image: 'N-3.jpg',
      desc: 'The number of children and young people out of school has risen for the seventh consecutive year, up to 273 million, driven by population growth, crises, and shrinking budgets. This is the main finding of UNESCO\'s 2026 Global Education Monitoring Report. One in six children of school age worldwide are excluded from education.'
    }
  ]);
}