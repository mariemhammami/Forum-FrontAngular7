import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { Forum } from '../Forum';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  posts: Array<Forum> = [];
  errorMessage: string;
  constructor(private postService: ForumService) { }

  getForums() {
    this.postService.getForums().subscribe(
      posts => this.posts = posts, error => this.errorMessage = error);
  }

  ngOnInit() {
    this.getForums();
  }

  deletePost(id) {
    // this.postService.deletePost(id).subscribe(
    //   result => {
    //     window.location.reload();
    //   }
    // );
  }

}
