import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'btd-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomeComponent {
  constructor(private route:ActivatedRoute, private router:Router) { }

  onClickEvent(): void {
    console.log('ádassda');
    this.router.navigate(['/post-detail']);
  }
}
