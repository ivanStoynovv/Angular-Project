import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [FooterComponent, HeaderComponent, MainComponent, NavBarComponent]
})
export class CoreModule { }
