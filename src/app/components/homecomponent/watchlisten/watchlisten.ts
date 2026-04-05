import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-watchlisten',
  standalone: true,
  imports: [],
  templateUrl: './watchlisten.html',
  styleUrl: './watchlisten.css',
})
export class Watchlisten {
  private sanitizer = inject(DomSanitizer);
  private platformId = inject(PLATFORM_ID);
  
  videoUrl: SafeResourceUrl | null = null;
  isVideoVisible = signal<boolean>(false);

  mainVideo = {
    id: 'rCCVGi_h3nA',
    title: 'Why is the United Nations in New York City? The untold story',
    desc: 'After World War II, the search for a permanent UN headquarters drew global attention, involving leaders like President Harry S. Truman.',
    thumb: 'Thum.avif'
  };

  smallVideos = [
    {
      id: 'rCCVGi_h3nA', // এখানে আসল YouTube ID দিন
      title: "Inside a midwife mentor's day",
      desc: '"Join me on my journey as a midwife in the world\'s largest refugee camp...',
      thumb: 'Thum-1.webp'
    },
    {
      id: 'rCCVGi_h3nA', // এখানে আসল YouTube ID দিন
      title: 'State of the Global Climate report 2025',
      desc: 'The World Meteorological Organization warns that unprecedented greenhouse gas...',
      thumb: 'Thum-2.jpg'
    }
  ];

  openVideo(id: string) {
    const url = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.isVideoVisible.set(true);

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden'; 
    }
  }

  closeVideo() {
    this.isVideoVisible.set(false);
    this.videoUrl = null; 
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto'; 
    }
  }
}