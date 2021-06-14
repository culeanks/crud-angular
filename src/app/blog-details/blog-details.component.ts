import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  currentBlog = null;
  message = '';

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getBlog(this.route.snapshot.paramMap.get('id'));
  }

  getBlog(id) {
    this.blogService.get(id)
      .subscribe(
        data => {
          this.currentBlog = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // updatePublished(status) {
  //   const data = {
  //     title: this.currentBLog.title,
  //     summary: this.currentBlog.summary,
  //     published: status
  //   };

  //   this.blogService.update(this.currentBlog.id, data)
  // .subscribe(
  //   response => {
  //     this.currentBlog.published = status;
  //     console.log(response);
  //   },
  //   error => {
  //     console.log(error);
  //   });
  // }

updateTutorial() {
  this.blogService.update(this.currentBlog.id, this.currentBlog)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'The blog was updated successfully!';
      },
      error => {
        console.log(error);
      });
}

deleteBlog() {
  this.blogService.delete(this.currentBlog.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/blogs']);
      },
      error => {
        console.log(error);
      });
}
}