import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'btd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private route:ActivatedRoute, private router:Router) { }

  onClickEvent(): void {
    console.log('ádassda');
    this.router.navigate(['/post-detail']);
  }
}
