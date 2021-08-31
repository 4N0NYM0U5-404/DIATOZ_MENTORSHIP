import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onLogout() {
    localStorage.removeItem('data');
    this.router.navigate([""])
  }


  ngOnInit(): void {
    const loginUser = localStorage.getItem("data");
    this.authService.getUsers().subscribe((res:any)=>{
      console.log(res)
      res.map((user:any)=>{
        if (user?.username === loginUser) {
          console.log("user",user)
          this.user = user;
        }
      })
        })
  }



}
