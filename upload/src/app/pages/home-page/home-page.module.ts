import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CategoryComponent } from './component/category/category.component';
import { UsersListComponent } from './component/users-list/users-list.component';
import { PostsFeedComponent } from './component/posts-feed/posts-feed.component';
import { HomePageMaterialModule } from '../modules/home-page-material.module';
import { AddPostComponent } from './component/posts-feed/add-post/add-post.component';
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [HomePageComponent,CategoryComponent,UsersListComponent, PostsFeedComponent, AddPostComponent],
  imports: [
    CommonModule,
    HomePageMaterialModule,
    ReactiveFormsModule
  ],
  exports:[HomePageComponent]
})
export class HomePageModule { }
