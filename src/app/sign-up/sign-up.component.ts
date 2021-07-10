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
  })

  get fname(){return this.signupForm.get('fname')}
  get lname(){return this.signupForm.get('lname')}
  get username(){return this.signupForm.get('username')}
  get password(){return this.signupForm.get('password')}

  constructor(
    private authService: AuthService
  ) {

   }

  onSubmit(){
    let firstname = this.signupForm.get('fname')
    let lastname = this.signupForm.get('lname')
    let username = this.signupForm.get('username')
    let password = this.signupForm.get('password')
    console.log(firstname?.value,lastname?.value,username?.value,password?.value)

    let userData = {
      id:new Date() +" "+ (Math.random()*123),
      firstname:firstname?.value,
      lastname:lastname?.value,
      username:username?.value,
      password:password?.value
    }

    this.authService.createUser(userData).subscribe(res=>{
      console.log(res)
    })
  }

  ngOnInit(): void {

  }

}
