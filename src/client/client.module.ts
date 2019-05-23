import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientRoutingModule } from './client.routing.module';
import { LoginComponent } from './login/login.component';
import { HomePageModule } from './home/home-page.module';
import { PostCategoryModule } from './post-category/post-category.module';
import { PostDetailModule } from './post-detail/post-detail.module';

@NgModule({
    imports: [
        CommonModule,
        ClientRoutingModule,
        HomePageModule,
        PostCategoryModule,
        PostDetailModule
    ],
    declarations: [
        LoginComponent, 
    ],
    exports: [
        RouterModule,
        LoginComponent
    ],
})

export class ClientModule { }