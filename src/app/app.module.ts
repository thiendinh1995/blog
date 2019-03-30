import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { HomeComponent } from './../components/home/home-page';
import { PostDetailComponent } from './../components/post-detail/post-detail';
import { SoftwarePageComponent } from '../components/software-page/software-page';
import { PostCategoryComponent } from '../components/post-category/post-category';
import { HeaderComponent } from '../components/header/header.component';
import { MenuBarComponent } from '../ui-controls/menu-bar/menu-bar.component';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailComponent,
    SoftwarePageComponent,
    PostCategoryComponent,
    HeaderComponent,
    MenuBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
