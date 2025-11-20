import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ResultView, TestConfig } from '../../models/testing.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigPanelComponent } from '../config-panel/config-panel.component';
import { AiAssistComponent } from '../ai-assist/ai-assist.component';
import { ResultsPanelComponent } from '../results-panel/results-panel.component';

@Component({
  selector: 'dv-testing-center',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfigPanelComponent, AiAssistComponent, ResultsPanelComponent],
  templateUrl: './testing-center.component.html',
  styleUrls: ['./testing-center.component.scss']
})
export class TestingCenterComponent {
  config: TestConfig = {
    mode: 'stored',
    artifact: 'Rules',
    version: 'Published',
    inputType: 'production',
    fromTime: this.isoAt(-1),
    toTime: this.isoAt(0),
    adv: {}
  };
  view: ResultView = 'summary';
  results: any;

  onRun(res: any){ this.results = res; }
  onSwitchView(v: ResultView){ this.view = v; }

  private isoAt(daysDelta:number){
    const d = new Date(Date.now()+daysDelta*24*3600*1000);
    const pad = (x:number)=> String(x).padStart(2,'0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
}
