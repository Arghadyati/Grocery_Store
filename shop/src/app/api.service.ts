import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 constructor(private http:HttpClient){

 }
  inscat(fd:any){
   return this.http.post("https://serverside-e9jb.onrender.com/cat/add",fd);


  }
  login(fd:any){
    return this.http.post("https://serverside-e9jb.onrender.com/auth/login",fd);
 
 
   }
  inspro(fd:any){
    return this.http.post("https://serverside-e9jb.onrender.com/pro/add",fd);
 
 
   }

  selcat(){
    return this.http.get("https://serverside-e9jb.onrender.com/cat/sel");
 
 
   }

   delcat(fd:any){
    return this.http.post("https://serverside-e9jb.onrender.com/cat/del",fd);
 
 
   }
   geteditcat(fd:any){
    return this.http.post("https://serverside-e9jb.onrender.com/cat/edit",fd);
 
 
   }
   delpro(fd:any){
    return this.http.post("https://serverside-e9jb.onrender.com/pro/del",fd);
 
 
   }
   updscat(fd:any){
    return this.http.post("https://serverside-e9jb.onrender.com/cat/upd",fd);
 
 
   }
   selpro(){
    return this.http.get("https://serverside-e9jb.onrender.com/pro/sel");
 
 
   }
  
}
