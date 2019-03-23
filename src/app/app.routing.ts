import { Routes, } from "@angular/router";
import { PostDetailComponent } from "../components/post-detail/post-detail";
import { HomeComponent } from "src/components/home/home-page";
import { SoftwarePageComponent } from "src/components/software-page/software-page";

export const appRoutes: Routes = [
    { path: 'home-page', component: HomeComponent },
    { path: 'post-detail', component: PostDetailComponent },
    { path: 'software-page', component: SoftwarePageComponent },
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
];
