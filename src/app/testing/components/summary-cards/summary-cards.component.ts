import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Metrics, TestConfig } from '../../models/testing.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-summary-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.scss']
})
export class SummaryCardsComponent {
  @Input() metrics!: Metrics;
  @Input() config!: TestConfig;
  fmt(n?: number){ return n==null ? 'N/A' : (n*100).toFixed(2)+'%'; }
  labelMode(m: string) {
    if (m==='stored') return 'Stored Data (SQL)';
    if (m==='recompute') return 'Recompute Backtest';
    return 'Quick Replay';
  }
}
