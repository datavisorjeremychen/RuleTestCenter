import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-sql-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-view.component.html',
  styleUrls: ['./sql-view.component.scss']
})
export class SqlViewComponent {
  @Input() sql = '';
  @Output() rerun = new EventEmitter<void>();
  copy(){ navigator.clipboard.writeText(this.sql); alert('Copied SQL'); }
}
