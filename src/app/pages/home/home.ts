import { Component } from '@angular/core';
import { HeroSlide } from '../../components/homecomponent/hero-slide/hero-slide';
import { GlobalUpdates } from "../../components/homecomponent/global-updates/global-updates";
import { FeaturedGoal } from '../../components/homecomponent/featured-goal/featured-goal';
import { NHGlobalNews } from "../../components/homecomponent/nhglobal-news/nhglobal-news";
import { WorldPulse } from "../../components/homecomponent/world-pulse/world-pulse";
import { OurMission } from "../../components/homecomponent/our-mission/our-mission";
import { UnStructure } from "../../components/homecomponent/un-structure/un-structure";
import { Learnmore } from "../../components/homecomponent/learnmore/learnmore";
import { GlobalFacts } from "../../components/homecomponent/global-facts/global-facts";
import { Watchlisten } from "../../components/homecomponent/watchlisten/watchlisten";
import { GlobalGallery } from "../../components/homecomponent/global-gallery/global-gallery";


@Component({
  selector: 'app-home',
  imports: [HeroSlide, GlobalUpdates, FeaturedGoal, NHGlobalNews, WorldPulse, OurMission, UnStructure, Learnmore, GlobalFacts, Watchlisten, GlobalGallery],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
