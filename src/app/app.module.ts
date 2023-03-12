import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { TemplateProjectComponent } from './template-project/template-project.component';
import { ContactformComponent } from './contactform/contactform.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContacticonsComponent } from './contacticons/contacticons.component';
import { FooterComponent } from './footer/footer.component';
import { FormsbackgroundComponent } from './formsbackground/formsbackground.component';
import { GototopComponent } from './gototop/gototop.component';
import { NameLogoComponent } from './name-logo/name-logo.component';
import { NavLinksComponent } from './nav-links/nav-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    TemplateProjectComponent,
    ContactformComponent,
    AboutmeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ContacticonsComponent,
    FooterComponent,
    FormsbackgroundComponent,
    GototopComponent,
    NameLogoComponent,
    NavLinksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
