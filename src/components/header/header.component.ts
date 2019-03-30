import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'btd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('insidePopup') insideElement;  
  isDisplayPopup: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  private onClickEvent(): void {
    this.isDisplayPopup = !this.isDisplayPopup;
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    const clickedInside = this.insideElement.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isDisplayPopup = false;
    }
  }
}
