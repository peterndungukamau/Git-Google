 import { Injectable } from '@angular/core';
 import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '347bc0575ae9735b5768';
  private clientsecret = '81afaaa481cd770a2b991c68df83cd0cad61fd8b';

  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username = 'peterndungukamau';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
   }

   getprofileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  
   }
   updateProfile(username:string){
     this.username = username;

   }
}
