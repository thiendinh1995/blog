import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'btd-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('slidersView') sliders: ElementRef;
  index: number = 0;
  timerSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.timerSubscription = timer(3000, 3000).subscribe(() => {
      this.index++;
      this.caculatorSlider();
    });
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

  onClickEvent(): void {
    this.router.navigate(['/post-detail']);
  }

  caculatorSlider(): void {
    const postSlider = Array.from(document.querySelectorAll('.post-slider'));
    if (this.index > 2) {
      this.sliders.nativeElement.style.transform = `translateX(0px)`;
      this.index = 0;
    } else {
      this.sliders.nativeElement.style.transform = `translateX(${(-postSlider[0].clientWidth * this.index)}px)`;
    }
  }
}
