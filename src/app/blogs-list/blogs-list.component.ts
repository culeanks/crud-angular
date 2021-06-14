import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {

  blogs: any;
  currentBlog = null;
  currentIndex = -1;
  title = '';
  author = '';
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.retrieveBlogs();
  }

  retrieveBlogs() {
    this.blogService.getAll()
      .subscribe(
        data => {
          this.blogs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveBlogs();
    this.currentBlog = null;
    this.currentIndex = -1;
  }

  setActiveBlog(blog, index) {
    this.currentBlog = blog;
    this.currentIndex = index;
  }

  removeAllBlogs() {
    this.blogService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveBlogs();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.blogService.findByTitle(this.title)
      .subscribe(
        data => {
          this.blogs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchAuthor() {
    this.blogService.findByAuthor(this.author)
      .subscribe(
        data => {
          this.blogs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
