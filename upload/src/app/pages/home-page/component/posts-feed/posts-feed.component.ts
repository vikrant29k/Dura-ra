import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPostComponent } from './add-post/add-post.component';
@Component({
  selector: 'app-posts-feed',
  templateUrl: './posts-feed.component.html',
  styleUrls: ['./posts-feed.component.scss']
})
export class PostsFeedComponent {
constructor(private matDialog: MatDialog,){
}
openModal() {
  this.matDialog.open(AddPostComponent, {
    "width": '40rem',
    
    "autoFocus": false
  });
}
}
