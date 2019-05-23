import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailRoutingModule } from './post-detail.routing.module';
import { PostDetailComponent } from './post-detail';

@NgModule({
  imports: [
    CommonModule,
    PostDetailRoutingModule
  ],
  declarations: [PostDetailComponent]
})
export class PostDetailModule { }