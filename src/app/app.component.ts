import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";

@Component({
  selector: 'app-root',
 standalone: true,
 imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient){}
  title = 'fetch-api';
li:any;
lis=[];
let prod:any;
  ngOnInit(): void {
    // console.log('hi');
    this.http.get('https://dummyjson.com/products')
    .subscribe(Response=>{
      if(Response){
        hideloader();
      }
      console.log(Response);
      this.li=Response;
      this.lis=this.title.prod;
    });
    function hideloader(){
//      document.getElementById('loading').style.display='none';
    }
  }
}
