import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  likePost(post: Post) {
    const postIndexToLike = this.posts.findIndex(
      (postItem) => {
        if (postItem === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToLike].loveIts += 1;
    this.savePosts();
    this.emitPosts();
  }

  dislikePost(post: Post) {
    const postIndexToDislike = this.posts.findIndex(
      (postItem) => {
        if (postItem === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToDislike].loveIts -= 1;
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postItem) => {
        if (postItem === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
