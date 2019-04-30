import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private validateService: ValidateService ,private FlashMessage: NgFlashMessageService,
    private router: Router) { }

  ngOnInit() {
  }
name: String;
email: String;
username: string;
description: String
needs: string;

onSubscribe( ){
  if(!this.name || !this.email ) {
    this.FlashMessage.showFlashMessage({messages: ['Complete All Fields'], dismissible: true, timeout: 1000, type: 'danger'})

  }else{
    this.FlashMessage.showFlashMessage({messages: ['Thanks For Subscribe US'], dismissible: true, timeout: 1000, type: 'success'});
    
    this.name = '';
    this.email = '';
    
  }
}   



onSend() {
  if(!this.name || !this.email || !this.needs ) {
    this.FlashMessage.showFlashMessage({messages: ['Complete All Fields'], dismissible: true, timeout: 2000, type: 'danger'})

  }else{
    this.FlashMessage.showFlashMessage({messages: ['Give US Time To Design Your Project'], dismissible: true, timeout: 2000, type: 'success'})
    this.name = '';
    this.needs = '';
    this.email = '';
  }
}
  onSubmit() {
    if(!this.username || !this.description) {
      this.FlashMessage.showFlashMessage({messages: ['Please Fill All Fields'], dismissible: true, timeout: 2000, type: 'danger'})

    }else{
      this.FlashMessage.showFlashMessage({messages: ['Thanks We Will Call You Soon'], dismissible: true, timeout: 2000, type: 'success'})
      this.username = '';
      this.description = '';
    }
   
  }
  

    

}
