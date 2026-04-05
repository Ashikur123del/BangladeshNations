import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-page',
  standalone: true,
  imports: [],
  templateUrl: './mission.html',
  styleUrls: ['./mission.css']
})
export class MissionPage {
  values = [
    { icon: 'fa-solid fa-shield-halved', title: 'Integrity', desc: 'We uphold the highest standards of honesty and ethical conduct in all our work.' },
    { icon: 'fa-solid fa-scale-balanced', title: 'Justice', desc: 'We believe every individual deserves equal access to justice and fair treatment under the law.' },
    { icon: 'fa-solid fa-users', title: 'Inclusivity', desc: 'We advocate for the rights of all people, especially the marginalized and vulnerable.' },
    { icon: 'fa-solid fa-eye', title: 'Transparency', desc: 'We operate with openness and accountability to the communities we serve.' },
  ];
}
