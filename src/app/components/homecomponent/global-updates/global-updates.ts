import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-global-updates',
  standalone: true,
  imports: [], // CommonModule পুরোপুরি বাদ দেওয়া হয়েছে
  templateUrl: './global-updates.html',
  styleUrl: './global-updates.css',
})
export class GlobalUpdates {
  
  golbaUpdate = signal([
    {
      title: 'UN condemns killing of two more peacekeepers in Lebanon',
      desc: '30 March 2026 — The United Nations has condemned two consecutive days of deadly attacks on peacekeepers serving with the UN Interim Force in Lebanon (UNIFIL), amid rising hostilities between...',
      img: 'h-1.jpg',
    },
    {
      title: 'Airstrike on funeral underscores rising civilian toll in Sudan',
      desc: '30 March 2026 — Fears are mounting for civilians caught up in Sudan’s deadly war between rival militaries as attacks intensify and humanitarian access shrinks, following a deadly airstrike on a...',
      img: 'h-2.jpg', 
    },
    {
      title: 'Developing countries are being priced out, in struggle for affordable finance',
      desc: '30 March 2026 — Developing countries are being priced out of the affordable finance they desperately need for sustainable development, with sovereign credit ratings often overstating risk and...',
      img: 'h-3.jpg', 
    }
  ]);
}