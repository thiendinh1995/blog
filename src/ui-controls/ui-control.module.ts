import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
    imports: [
        CommonModule,     
    ],
    declarations: [
        HeaderComponent, 
        MenuBarComponent, 
    ],
    exports: [
        HeaderComponent, 
        MenuBarComponent, 
    ],
})

export class UIControlModule { }