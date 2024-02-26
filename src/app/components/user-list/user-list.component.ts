import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  
  //2.add property listOfUser
  listOfUser: string[];
  
  //3. create constructor, initialize value 
  constructor(){
    this.listOfUser = ['Rini','Widi','Yuli','Nova']
  }  


  /*1.Agar UserListComponent bisa meng-implementasi life-cycle angular hook,
   contoh saat kita call API. 
  ngOnInit akan dipanggil setelah method constructor() & 
  juga setelah method ngOnChanges() dipanggil*/
  ngOnInit(): void {
  }


}
