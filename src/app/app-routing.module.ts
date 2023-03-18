import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions, Router } from '@angular/router';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'data-protection', component: DataprotectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
