import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'btd-post-category',
  templateUrl: './post-category.html',
  styleUrls: ['./post-category.scss']
})
export class PostCategoryComponent {

  constructor(private route:ActivatedRoute, private router:Router) { }

  onClickEvent(): void {
    this.router.navigate(['/home-page']);
  }
}
