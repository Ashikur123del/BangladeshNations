import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// ১. Swiper-এর এলিমেন্টগুলো রেজিস্টার করার জন্য এটি ইম্পোর্ট করুন
import { register } from 'swiper/element/bundle';

// ২. অ্যাপ্লিকেশন বুটস্ট্র্যাপ করার আগে Swiper রেজিস্টার করুন
// এটি না করলে <swiper-container> ব্রাউজারে দেখা যাবে না
register();

bootstrapApplication(App, appConfig).catch((err) => console.error(err));