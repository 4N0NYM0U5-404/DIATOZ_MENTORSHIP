import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
@Injectable({
  providedIn: "root"
})

export class AuthService{
  private REST_API_URL = environment.baseurl

constructor(
  private httpClient:HttpClient,
  ){}


public getUsers(){
 let url = this.REST_API_URL + "/users"         //http://localhost:3000/users
  return this.httpClient.get(url)
}

public createUser(data:any){
  let url = this.REST_API_URL + "/users"
    return this.httpClient.post(url,data)
}

}
