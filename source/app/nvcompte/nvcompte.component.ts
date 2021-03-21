import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-nvcompte',
  templateUrl: './nvcompte.component.html',
  styleUrls: ['./nvcompte.component.scss']
})
export class NvcompteComponent implements OnInit {
  myForm: FormGroup;
  matcher = new MyErrorStateMatcher();  
  loginForm : FormGroup;
  hide = true;
  hide1=true;
  registerForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';}
  onLogin(){  

  }
  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  confirmFormControl = new FormControl('', [
    Validators.required,
  ]);
  checkPasswords(group: FormGroup) { 
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
  
    return password === confirmPassword ? null : { notSame: true }     
  }

  constructor(private formBuilder: FormBuilder) { 
    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });
  }
  ngOnInit(): void {


  }

}
