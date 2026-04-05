import { Component, signal, computed } from '@angular/core';

interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  desc: string;
  credit: string;
  category: string;
  featured?: boolean;
}

@Component({
  selector: 'app-gallary',
  imports: [],
  templateUrl: './gallary.html',
  styleUrl: './gallary.css',
})
export class Gallary {

  activeFilter = 'all';
  lightboxPhoto: GalleryPhoto | null = null;
  private currentIndex = 0;

  categories = ['Human Rights', 'Humanitarian Aid', 'Environment', 'Development', 'Peace'];

  photos: GalleryPhoto[] = [
    {
      id: 1, 
      src: 'Gal-1.jpg', featured: true,
      title: 'Life-Giving Water, Life-Giving Women',
      desc: 'Women in Malaysia\'s Kedah River Basin play vital roles in sustaining communities. Centering women in water governance leads to more equitable, resilient systems.',
      credit: '© UNDP Malaysia',
      category: 'Development'
    },
    {
      id: 2, src: 'Gal-2.jpg',
      title: 'South Sudan: Grateful for Water',
      desc: 'In Malakal, 45,000 displaced people rely on clean water supply from the Nile, even as funding cuts erode health care.',
      credit: '© UNOCHA / Adedeji Ademigbuji',
      category: 'Humanitarian Aid'
    },
    {
      id: 3,
      src: 'hero-1.jpg',
      title: 'Food Waste and the Planet',
      desc: 'The world throws away about 1 billion tonnes of edible food yearly. Moving to circularity requires everyone to act together.',
      credit: '© FAO / Miguel Schincariol',
      category: 'Environment'
    },
    {
      id: 4, 
      src: 'hero-2.jpg',
      title: 'Justice and Equality for Every Citizen',
      desc: 'NHCRF works tirelessly to ensure human rights are protected across Bangladesh through reporting and legal support.',
      credit: '© NHCRF / Media',
      category: 'Human Rights'
    },
    {
      id: 5, 
      src: 'hero-3.webp',
      title: 'Protecting Rights Through Documentation',
      desc: 'Every case documented brings us one step closer to accountability and justice for victims of human rights violations.',
      credit: '© NHCRF / Media',
      category: 'Human Rights'
    },
    {
      id: 6,  
      src: 'N-1.jpg',
      title: 'The Ripple Effect',
      desc: 'Empowering rural communities through sustainable agriculture and targeted support systems that transform local economies.',
      credit: '© IFAD / Ernesto Benavides',
      category: 'Development'
    },
    {
      id: 7,
      src: 'N-2.jpg',
      title: 'Displacement Crisis Deepens',
      desc: 'Masses of displaced people continue to face hardship, requiring sustained international humanitarian attention.',
      credit: '© UNHCR / Andrew McConnell',
      category: 'Humanitarian Aid'
    },
    {
      id: 8,
      src: 'N-3.jpg',
      title: 'Education for Every Child',
      desc: '273 million children remain out of school globally. NHCRF advocates for education rights as a cornerstone of human dignity.',
      credit: '© UNESCO',
      category: 'Development'
    },
    {
      id: 9, src: 'w-3.jpg',
      title: 'Refugees Struggle with Hunger',
      desc: 'Reduced food assistance has plunged refugee families into hunger and hardship, threatening both survival and self-reliance.',
      credit: '© WFP / Rein Skullerud',
      category: 'Humanitarian Aid'
    },
    {
      id: 10, src: 'M-2.jpg',
      title: 'Protecting Human Rights',
      desc: 'Protecting human rights is a central purpose of our mission. Every individual deserves dignity, freedom, and justice.',
      credit: '© NHCRF / Media',
      category: 'Human Rights'
    },
    {
      id: 11, src: 'M-4.jpg',
      title: 'Delivering Humanitarian Aid',
      desc: 'Life-saving aid reaches people affected by conflicts and disasters through coordinated international response efforts.',
      credit: '© UN Photo',
      category: 'Humanitarian Aid'
    },
    {
      id: 12, src: 'h-1.jpg',
      title: 'Peacekeepers Under Fire in Lebanon',
      desc: 'UN peacekeepers serve in dangerous conditions to maintain peace and protect civilian lives in conflict zones worldwide.',
      credit: '© UN Photo / UNIFIL',
      category: 'Peace'
    }
  ];

  allPhotosSignal = signal(this.photos);
  activeFilterSignal = signal('all');

  filteredPhotos = computed(() => {
    const f = this.activeFilterSignal();
    if (f === 'all') return this.allPhotosSignal();
    return this.allPhotosSignal().filter(p => p.category === f);
  });

  stats = [
    { value: '200+', label: 'Photos Archived' },
    { value: '64', label: 'Districts Covered' },
    { value: '35+', label: 'Campaigns Documented' },
    { value: '12', label: 'Years of Records' }
  ];

  setFilter(cat: string) {
    this.activeFilter = cat;
    this.activeFilterSignal.set(cat);
  }

  openLightbox(photo: GalleryPhoto) {
    const filtered = this.filteredPhotos();
    this.currentIndex = filtered.findIndex(p => p.id === photo.id);
    this.lightboxPhoto = photo;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxPhoto = null;
    document.body.style.overflow = 'auto';
  }

  prevPhoto(e: Event) {
    e.stopPropagation();
    const filtered = this.filteredPhotos();
    this.currentIndex = (this.currentIndex - 1 + filtered.length) % filtered.length;
    this.lightboxPhoto = filtered[this.currentIndex];
  }

  nextPhoto(e: Event) {
    e.stopPropagation();
    const filtered = this.filteredPhotos();
    this.currentIndex = (this.currentIndex + 1) % filtered.length;
    this.lightboxPhoto = filtered[this.currentIndex];
  }
}

 