 import { Injectable } from '@angular/core';
 import { Http, Headers } from '@angular/http';
 import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '';
  private clientsecret = '';

  constructor(private http:Http) {
    console.log("service is ready");
    this.username = 'peterndungukamau';
   }

   getProfileInfo(){
     return this.http.get("https://api.github/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }
}
