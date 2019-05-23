import { Component, Output, EventEmitter, Input, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'btd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  @Output() closeDialogEvent: EventEmitter<any> = new EventEmitter();
  @Input('isCloseDialog') isCloseDialog: boolean = false;

  constructor(
    private router: Router,
  ) { }

  onClickEvent(): void {
    this.router.navigate(['/post-detail']);
  }

  handleUserLogin(): void {
    this.closeDialogEvent.emit({ isLogin: true });
    this.closeDialog();
  }

  closeDialog(): void {
    (document.querySelector('.dialog-content') as HTMLElement).style.animation = 'fadeOutDialogContent 500ms 0ms forwards';
    setTimeout(() => {
      this.isCloseDialog = !this.isCloseDialog;
    }, 300);
  }
}
