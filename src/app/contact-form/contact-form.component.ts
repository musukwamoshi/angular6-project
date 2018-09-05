// all imports go here

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  message: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string  = '';
  alert: string  = 'This field is required.';


  ngOnInit() {

  }



  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'email' : [null, Validators.required],
      'message' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });

  }

  // can be replaced with a function that sends data to an api
  addPost(post) {

    this.message = post.message;
    this.firstname = post.firstname;
    this.lastname = post.lastname;
    this.email = post.email;
  }

  }




