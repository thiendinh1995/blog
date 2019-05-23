import { Routes, RouterModule, } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
    {
        path: 'home-page',
        loadChildren: './home/home-page.module#HomePageModule'
    },
    {
        path: 'post-detail',
        loadChildren: './post-detail/post-detail.module#PostDetailModule'
    },
    {
        path: 'post-category',
        loadChildren: './post-category/post-category.module#PostCategoryModule'
    },
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class ClientRoutingModule { }