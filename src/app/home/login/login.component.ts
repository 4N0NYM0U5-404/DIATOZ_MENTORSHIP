import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AuthService } from 'src/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
  })

  // get username(){return this.loginForm.get('username')}
  // get password(){return this.loginForm.get('password')}


  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  onSubmit(){
    let username = this.loginForm.get('username')
    let password = this.loginForm.get('password')
    let isValid = false
    console.log(username?.value,password?.value)
    this.authService.getUsers().subscribe((res:any)=>{
      console.log(res)
      res.map((user:any)=>{
        if(user.username === username?.value && user.password == password?.value){
          console.log(user)
          isValid = true
          localStorage.setItem("data",(username?.value));
          localStorage.setItem("isLoggedin","true");
          this.router.navigate(["/dashboard"])
        }
      })
      if(!isValid){
        window.alert('INVALID')
      }   })

  }

  ngOnInit(): void {

}

}
