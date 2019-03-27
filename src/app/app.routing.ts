import { Routes, } from "@angular/router";
import { PostDetailComponent } from "../components/post-detail/post-detail";
import { HomeComponent } from "src/components/home/home-page";
import { SoftwarePageComponent } from "src/components/software-page/software-page";
import { PostCategoryComponent } from "src/components/post-category/post-category";

export const appRoutes: Routes = [
    { path: 'home-page', component: HomeComponent },
    { path: 'post-detail', component: PostDetailComponent },
    { path: 'software-page', component: SoftwarePageComponent },
    { path: 'post-category', component: PostCategoryComponent },
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
];
