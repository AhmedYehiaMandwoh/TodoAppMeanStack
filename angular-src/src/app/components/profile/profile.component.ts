import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Post } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user: Object;
posts;
  constructor(private authService: AuthService,
              private route: ActivatedRoute) {
                
               }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
       this.user = (data as any).user

    },
      err => {
        console.log(err);
        return false
      }
    );

    // Fetch All Posts
    this.fetchAll();

  }
  
  // Fetch All Posts
  fetchAll() {
    this.authService.allPosts().subscribe(data =>{
      this.posts = data as any
      console.log(this.posts)
    },
    err => {
      console.log(err);
      return false
    })
  }
  // Add New Post
  addNewPost(title, description){
    this.authService.addPost(title, description).subscribe((post) => {
      window.location.reload();
    })
  }
  id: String;
  updatePost() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.authService.allPostsById(this.id).subscribe(res => {
        this.posts = res;
        console.log(this.posts)
      })
    })
  }
  // Delete Post
  deletePost(id) {
    this.authService.deletePost(id).subscribe(() => {
    this.fetchAll()
    console.log(id)
    })
  }
}
