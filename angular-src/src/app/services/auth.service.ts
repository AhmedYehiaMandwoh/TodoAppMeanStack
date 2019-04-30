import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authToken: any;
user: any;
post: any;
  constructor(private http: HttpClient) { }

  registerUser(user) {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post('users/register', user, {headers: headers})

  }
  authenticateUser(user) {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
  }

  getProfile(): any {
    this.loadToken();
    let headers = new HttpHeaders().append('Authorization', this.authToken).append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers})
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){

    if (localStorage.id_token == undefined ){
     return true
    } else {
    const helper = new JwtHelperService();
    return helper.isTokenExpired(localStorage.id_token); 
    }
   }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
 // Posts
  allPosts() {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.get('posts/post', {headers: headers})
  }
  allPostsById(id) {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.get(`posts/post/${id}`, {headers: headers})
  }
  addPost(title, description) {
    const post = {
      title,
      description
    };
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post('posts/add',post, {headers: headers} )
    }

  updatePost(id, title, description) {
    const post = {
      title,
      description
    };
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post(`posts/update/${id}`, post, {headers: headers} )
  }

  deletePost(id) {
    console.log(id)
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.get(`posts/delete/${id}`, {headers: headers} )
  }
  
}
