import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
