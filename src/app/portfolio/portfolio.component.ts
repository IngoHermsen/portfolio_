import { Component } from '@angular/core';
import { Project } from 'src/models/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Join',
      usedTechs: ['Angular', 'Typescript', 'Firebase'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
      link: 'link',
      githubLink: 'link',
      jsDocLink: 'link',
      imagePath: 'preview_join.png'
    },
    {
      title: 'Pokedèx',
      usedTechs: ['Javascript', 'HTML', 'CSS', 'API'],
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      link: 'link',
      githubLink: 'link',
      jsDocLink: 'link',
      imagePath: 'preview_pokedex.png'
    },
    {
      title: 'El Pollo Loco',
      usedTechs: ['Javascript', 'HTML', 'CSS'],
      description: 'A simple Jump-and-Run-Game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      link: 'link',
      githubLink: 'link',
      jsDocLink: 'link',
      imagePath: 'preview_elpolloloco.png'
    }

  ];
}
