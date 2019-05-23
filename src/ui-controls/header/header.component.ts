import { Component, HostListener, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'btd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('insidePopup') insideElement;
  @Output() openDialogLoginEvent: EventEmitter<Object> = new EventEmitter();
  @Input('isLogin') isLogin: boolean = false;
  isDisplayPopup: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('Is Login', this.isLogin);
   }

  /**
   * Handle event click button setting
   */
  private onClickEvent(): void {
    this.isDisplayPopup = !this.isDisplayPopup;
  }

  /**
   * Handle display popup setting
   * @param targetElement 
   */
  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    const clickedInside = this.insideElement ? this.insideElement.nativeElement.contains(targetElement) : true;
    this.isDisplayPopup = !clickedInside ? false : true;
  }

  /**
   * Handle open dialog login
   */
  openDialogLogin(): void {
    this.openDialogLoginEvent.emit({ isOpen: true });
  }

  handleSetting(): void {
    
  }

  /**
   * Handle open dialog login
   */
  logoutUser(): void {
    // this.isLogin = false;
  }
}
