import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventRow } from '../../models/testing.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-clauses-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clauses-view.component.html',
  styleUrls: ['./clauses-view.component.scss']
})
export class ClausesViewComponent {
  @Input() rows: EventRow[] = [];
  focused?: EventRow;
  select(r: EventRow){ this.focused = r; }
}
