import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-project',
  templateUrl: './template-project.component.html',
  styleUrls: ['./template-project.component.scss']
})
export class TemplateProjectComponent {
  @Input() projects: any = [];
}
