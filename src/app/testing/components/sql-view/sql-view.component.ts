import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'dv-sql-view',
  imports: [CommonModule],
  templateUrl: './sql-view.component.html',
  styleUrls: ['./sql-view.component.scss']
})
export class SqlViewComponent {
  @Input() sql = '';
  @Output() rerun = new EventEmitter<void>();
  copy(){ navigator.clipboard.writeText(this.sql); alert('Copied SQL'); }
}
