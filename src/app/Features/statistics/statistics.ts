import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './statistics.html',
  styleUrls: ['./statistics.css'],
})
export class Statistics {
  
}
