import { Component, OnInit } from '@angular/core';
import { SpfService } from 'src/app/services/spf.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any []= [];
  constructor(private spf:SpfService) { }

  ngOnInit() {
  }

  Buscar(buscar:string)
  {

    console.log(buscar);
    this.spf.getartista(buscar).subscribe((data:any) =>
      {
        this.artistas= data;
      console.log(data);
    });

  }

}
