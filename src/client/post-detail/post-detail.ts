import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'btd-post-detail',
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.scss']
})
export class PostDetailComponent {

  constructor(private route:ActivatedRoute, private router:Router) { }

  onClickEvent(): void {
    this.router.navigate(['/home-page']);
  }
}
