import { Component } from '@angular/core';
import { Skill } from 'src/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    {name: "Angular", iconpath: 'angular.png'},
    {name: "Typescript", iconpath: 'typescript.png'},
    {name: "Javascript", iconpath: 'javascript.png'},
    {name: "HTML", iconpath: 'html.png'},
    {name: "Firebase", iconpath: 'firebase.png'},
    {name: "GIT", iconpath: 'git.png'},
    {name: "CSS", iconpath: 'css.png'},
    {name: "Rest-Api", iconpath: 'rest-api.png'},
    {name: "Scrum", iconpath: 'scrum.png'},
    {name: "Material design", iconpath: 'material-design.png'}
  ]
}
