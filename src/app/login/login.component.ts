import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  })

  get username(){return this.loginForm.get('username')}
  get password(){return this.loginForm.get('password')}


  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  onSubmit(){
    let username = this.loginForm.get('username')
    let password = this.loginForm.get('password')
    console.log(username?.value,password?.value)
    this.authService.getUsers().subscribe((res:any)=>{
      console.log(res)
      res.map((user:any)=>{
      console.log(user)
        if(user.username === username?.value && user.password == password?.value){
          this.router.navigate(["/home"])
        }

      })

    })
  }


  ngOnInit(): void {





  }

}
