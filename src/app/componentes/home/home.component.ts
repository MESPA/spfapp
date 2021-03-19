
import { Component, OnInit } from '@angular/core';
import { SpfService } from 'src/app/services/spf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nc:any[]=[];

  constructor(private spoty:SpfService) {


    this.spoty.getnewrelase().subscribe( (data:any) => {
      console.log(data.albums.items);
      this.nc = data.albums.items;
    });
  //  this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data:any) => {

  //  this.paises = data;
  //  console.log(data);
  //  })

   }



  ngOnInit() {
  }

}
