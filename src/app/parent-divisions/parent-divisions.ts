import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-parent-divisions',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './parent-divisions.html',
  styleUrls: ['./parent-divisions.css'],
})
export class ParentDivisions {}
