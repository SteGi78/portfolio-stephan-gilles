import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SkillsComponent, ProjectsComponent, AboutComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
