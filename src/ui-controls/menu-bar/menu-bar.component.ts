import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'btd-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  @ViewChild('insidePopup') insideElement;
  isShowMenuNavbar: boolean = false;
  isDisplaySearchBar: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  showMenuNavbar(): void {
    this.isShowMenuNavbar = !this.isShowMenuNavbar;
    let menuNavbar = document.getElementsByClassName('menu-navbar-content-pc-name-menu') as HTMLCollectionOf<HTMLElement>;
    let menuNavBarMobile = document.getElementsByClassName('menu-navbar-content-mobile-name-menu') as HTMLCollectionOf<HTMLElement>;
    menuNavbar[0].style.display = this.isShowMenuNavbar ? 'block' : 'none';
    menuNavBarMobile[0].style.display = this.isShowMenuNavbar ? 'none' : 'flex';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 600) {
      let menuNavbar = document.getElementsByClassName('menu-navbar-content-pc-name-menu') as HTMLCollectionOf<HTMLElement>;
      let menuNavBarMobile = document.getElementsByClassName('menu-navbar-content-mobile-name-menu') as HTMLCollectionOf<HTMLElement>;
      menuNavbar[0] ? menuNavbar[0].removeAttribute('style') : null;
      menuNavBarMobile[0] ? menuNavBarMobile[0].removeAttribute('style') : null;
      this.isDisplaySearchBar = false;
      this.isShowMenuNavbar = false;
    }
  }

  private onClickDisplaySearchBar(): void {
    this.isDisplaySearchBar = !this.isDisplaySearchBar;
  }
}
