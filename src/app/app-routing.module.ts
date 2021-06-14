import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


const routes: Routes = [
{ path: '', redirectTo: 'blogs', pathMatch: 'full' },
{ path: 'blogs', component: BlogsListComponent },
{ path: 'blogs/:id', component: BlogDetailsComponent },
{ path: 'add', component: AddBlogComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
