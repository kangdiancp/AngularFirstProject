import { Component, OnInit } from '@angular/core';
import { Paslon } from 'src/app/models/paslon.model';


@Component({
  selector: 'app-pemilu',
  templateUrl: './pemilu.component.html',
  styleUrls: ['./pemilu.component.css']
})
export class PemiluComponent implements OnInit{
  listOfPaslon : Paslon[];
  

  //call once
  constructor(){
    this.listOfPaslon = [
      new Paslon(1,"Amin",0,"https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/1/97f24c6f-69b8-44aa-8a94-3cd34f493420.jpg","Menuju Perubahan"),
      new Paslon(2,"Prabowo-Gibran",0,"https://www.malukuterkini.com/wp-content/uploads/2023/10/PRABOWO-221023-1-OK.jpg","Indonesia Emas"),
      new Paslon(3,"Ganjar-Mahfud",0,"https://jamberita.com/foto_berita/2023/10/18/97fb_img_1697624616829.jpg","Lanjut")
    ];
  }

  sortedPaslonVotes(): Paslon[]{
    return this.listOfPaslon.sort((a:Paslon,b:Paslon)=> b.votes - a.votes);
  }

  addPaslon(nomor:HTMLInputElement,namaPaslon: HTMLInputElement,photo: HTMLInputElement, moto: HTMLInputElement):boolean{
    console.log(`Adding nomor : ${nomor.value} and nama: ${namaPaslon.value}`);
    this.listOfPaslon.push(new Paslon(Number(nomor.value),namaPaslon.value,0,photo.value,moto.value))
    return false;
  }

  ngOnInit(): void {

  }

}
