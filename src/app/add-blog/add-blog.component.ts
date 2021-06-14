import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  blog = {
    title: '',
    summary: '',
    author: ''
  };
  submitted = false;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  saveBlog() {
    const data = {
      title: this.blog.title,
      summary: this.blog.summary,
      author: this.blog.author
    };

    this.blogService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBlog() {
    this.submitted = false;
    this.blog = {
      title: '',
      summary: '',
      author: ''
    };
  }
}