import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.scss']
})
export class SeConnecterComponent implements OnInit {
  // loginForm : FormGroup;
  hide = true;
  constructor() { }
  email = new FormControl('', [Validators.required, Validators.email]);
  myimage:string = "assets/images/img_avatar.png";
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';}
  // onLogin(){  }
  ngOnInit(): void {
  }
  
}
