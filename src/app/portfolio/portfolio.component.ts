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
      link: 'https://ingo-hermsen.developerakademie.net/join/main',
      githubLink: 'https://github.com/IngoHermsen/Join',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'preview_join.png'
    },
    {
      title: 'Pokedèx',
      usedTechs: ['Javascript', 'HTML', 'CSS', 'API'],
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      link: 'https://ingo-hermsen.developerakademie.net/pokedex/',
      githubLink: 'https://github.com/IngoHermsen/pokedex/',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'preview_pokedex.png'
    },
    {
      title: 'El Pollo Loco',
      usedTechs: ['Javascript', 'HTML', 'CSS'],
      description: 'A simple Jump-and-Run-Game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      link: 'https://ingo-hermsen.developerakademie.net/elpolloloco/',
      githubLink: 'https://github.com/IngoHermsen/elPolloLoco/',
      jsDoc: true,
      jsDocLink: 'https://ingo-hermsen.developerakademie.net/elpolloloco/out/',
      imagePath: 'preview_elpolloloco.png'
    }

  ];
}
