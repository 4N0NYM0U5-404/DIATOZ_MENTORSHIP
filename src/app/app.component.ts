import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedin:any="";
  ngOnInit(): void {
    this.isLoggedin = localStorage.getItem('isLoggedin')

  }
}


