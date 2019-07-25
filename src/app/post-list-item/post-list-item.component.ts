import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onLike(post: Post) {
      this.postsService.likePost(post);
  }

  onNoLike(post: Post) {
    this.postsService.dislikePost(post);
  }

}
