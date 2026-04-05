import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Photogallery } from './pages/photogallery/photogallery';
import { MissionPage } from './pages/mission/mission';
// import { ContactPage } from './pages/contact/contact';
// import { ComplainPage } from './pages/complain/complain';
import { MembersPage } from './pages/members/members';
import { CommitteePage } from './pages/committee/committee';
// import { AchievementsPage } from './pages/achievements/achievements';
// import { GlobalPage } from './pages/global/global';
import { ActivitiesPage } from './pages/activities/activities';
import { MembershipPage } from './pages/membership/membership';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'gallery', component: Photogallery },
  { path: 'mission', component: MissionPage },
  // { path: 'contact', component: ContactPage },
  // { path: 'complain', component: ComplainPage },
  { path: 'members', component: MembersPage },
  { path: 'committee', component: CommitteePage },
  // { path: 'achievements', component: AchievementsPage },
  // { path: 'global', component: GlobalPage },
  { path: 'activities', component: ActivitiesPage },
  { path: 'membership', component: MembershipPage },
];