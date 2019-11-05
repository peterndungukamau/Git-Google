import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   
   profile:any;
  repos:any;
  username:string;

  constructor(private profileService:ProfileService) {
 
    }

    findprofile(){
      this.profileService.updateProfile(this.username);
  
      this.profileService.getProfileInfo().subscribe(profile => {
  
        this.profile = profile;
        console.log(this.profile);
  
      });
      this.profileService.getprofileRepos().subscribe(repos => {
  
        this.repos = repos;
  
      });
    }
  
    ngOnInit() {
      this.profileService.updateProfile('Peterndungukamau');
      
      this.profileService.getProfileInfo().subscribe(profile => {this.profile = profile;
      console.log(profile)});
  
      this.profileService.getprofileRepos().subscribe(repos =>  this.repos = repos);
  
        
  
    }
    
  
  }