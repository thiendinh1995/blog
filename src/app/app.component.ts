import { Component, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'btd-project';
  sliderCurrent: number = 0;
  timerSubscription: Subscription;
  isShowMenuNavbar: boolean = false;

  @ViewChild('slidersView') sliders: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 600) {
      let menuNavbar = document.getElementsByClassName('menu-navbar-content-pc-name-menu') as HTMLCollectionOf<HTMLElement>;
      let menuNavBarMobile = document.getElementsByClassName('menu-navbar-content-mobile-name-menu') as HTMLCollectionOf<HTMLElement>;
      menuNavbar[0].removeAttribute('style');
      menuNavBarMobile[0].removeAttribute('style');
    }
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.timerSubscription = timer(2000, 2000).subscribe(() => {
      this.showSlider();
    });
  }

  ngAfterViewInit(): void {
    let slides = document.getElementsByClassName('post-image') as HTMLCollectionOf<HTMLElement>;
    // const sliderFirst = slides[0].cloneNode(true);
    // const sliderLast = slides[slides.length - 1].cloneNode(true);
    // (slides[0] as ChildNode).before(sliderLast);
    // (slides[slides.length - 1] as ChildNode).after(sliderFirst);
  }

  showMenuNavbar(): void {
    this.isShowMenuNavbar = !this.isShowMenuNavbar;
    let menuNavbar = document.getElementsByClassName('menu-navbar-content-pc-name-menu') as HTMLCollectionOf<HTMLElement>;
    let menuNavBarMobile = document.getElementsByClassName('menu-navbar-content-mobile-name-menu') as HTMLCollectionOf<HTMLElement>;
    menuNavbar[0].style.display = this.isShowMenuNavbar ? 'block' : 'none';
    menuNavBarMobile[0].style.display = this.isShowMenuNavbar ? 'none' : 'block';
  }

  showSlider(): void {
    // const length = document.getElementsByClassName('post-image').length;
    // if (this.sliderCurrent >= length - 1) {
    //   this.sliderCurrent = 1;
    //   this.sliders.nativeElement.style = `transform: translate(-${0}px)`;
    // } else {
    //   this.sliders.nativeElement.style = `transform: translate(-${this.sliderCurrent * 630}px)`;
    // }
    // this.sliderCurrent++;
  }

  onClickCategory(): void {
    this.router.navigate(['/post-category']);
  }

}
