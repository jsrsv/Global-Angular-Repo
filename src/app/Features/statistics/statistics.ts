import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicsDivision } from '../../electronics-division/electronics-division';
import { FmcgDivision } from '../../fmcg-division/fmcg-division';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule , ElectronicsDivision,FmcgDivision],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics {
  isExpanded = false;
  activeTab = 'FMCG'; // Default tab

  toggleTabs() {
    this.isExpanded = !this.isExpanded;
  }

  switchTab(tab: string) {
    this.activeTab = tab;
  }
}
