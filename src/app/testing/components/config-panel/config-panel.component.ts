import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mode, TestConfig } from '../../models/testing.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dv-config-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.scss']
})
export class ConfigPanelComponent {
  @Input() config!: TestConfig;
  @Output() configChange = new EventEmitter<TestConfig>();

  setMode(m: Mode){ this.config.mode = m; this.emit(); }
  emit(){ this.configChange.emit(this.config); }

  prefill(){
    if (this.config.mode === 'quick') {
      this.config.eventIds = 'aH_VMFEnQ6q_PZnaXlwwEA, 5pPgYls8Rn_1FqyF2FDzw';
      this.config.inputType = 'production';
    } else {
      this.config.eventTypes = 'token_swap';
      this.config.adv.minAmt = 100;
      this.config.adv.geo = 'NOT USA';
    }
    this.emit();
  }
}
