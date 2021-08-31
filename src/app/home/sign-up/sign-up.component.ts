import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm = new FormGroup({
    fname: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    tel: new FormControl('',Validators.required),
  })

  get fname(){return this.signupForm.get('fname')}
  get lname(){return this.signupForm.get('lname')}
  get username(){return this.signupForm.get('username')}
  get password(){return this.signupForm.get('password')}
  get dob(){return this.signupForm.get('dob')}
  get email(){return this.signupForm.get('email')}
  get tel(){return this.signupForm.get('tel')}

  constructor(
    private authService: AuthService
  ) {

   }

  onSubmit(){
    let firstname = this.signupForm.get('fname')
    let lastname = this.signupForm.get('lname')
    let username = this.signupForm.get('username')
    let password = this.signupForm.get('password')
    let dob = this.signupForm.get('dob')
    let email = this.signupForm.get('email')
    let tel = this.signupForm.get('tel')
    console.log(firstname?.value,lastname?.value,username?.value,password?.value,dob?.value,email?.value,tel?.value)

    let userData = {
      id:new Date() +" "+ (Math.random()*123),
      firstname:firstname?.value,
      lastname:lastname?.value,
      username:username?.value,
      password:password?.value,
      dob:dob?.value,
      email:email?.value,
      tel:tel?.value,
    }

    this.authService.createUser(userData).subscribe(res=>{
      console.log(res)
    })
  }

  ngOnInit(): void {

  }

}
