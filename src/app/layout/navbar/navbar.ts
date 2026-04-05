import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {
  isMenuOpen = signal(false);
  isAboutOpen = signal(false);
  isMobileAboutOpen = signal(false);
  activeSubLink = signal('');

  utilityLinks = [
    { label: 'English', icon: 'fa-solid fa-globe' }, 
    { label: 'বাংলা', icon: 'fa-solid fa-language' },
  ];

  directLinks = [
    { label: 'Photo Gallery', link: '/gallery' },
    { label: 'Activities', link: '/activities', icon: 'fa-solid fa-clipboard-list' },
    { label: 'Membership Application Form', link: '/membership', icon: 'fa-solid fa-clipboard-list' }
  ];

  aboutSubLinks = [
    { label: 'Mission & Vision', link: '/mission' }, 
    { label: 'Divisional Committee', link: '/committee' },
    { label: 'Members Around BD', link: '/members' },
    { label: 'Achievements', link: '/achievements' },
    { label: 'Complain on Human Rights Violation', link: '/complain' },
    { label: 'Global Issues', link: '/global' },
    { label: 'Contact Us', link: '/contact' },
  ];

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
    if (!this.isMenuOpen()) this.isMobileAboutOpen.set(false);
  }

  toggleAbout(state: boolean) {
    this.isAboutOpen.set(state);
  }

  toggleMobileAbout() {
    this.isMobileAboutOpen.update(v => !v);
  }

  setActive(link: string) {
    this.activeSubLink.set(link);
    this.isAboutOpen.set(false);
    this.isMenuOpen.set(false);
  }
}
