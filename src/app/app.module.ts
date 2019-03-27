import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { HomeComponent } from './../components/home/home-page';
import { PostDetailComponent } from './../components/post-detail/post-detail';
import { SoftwarePageComponent } from 'src/components/software-page/software-page';
import { PostCategoryComponent } from 'src/components/post-category/post-category';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailComponent,
    SoftwarePageComponent,
    PostCategoryComponent,
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
