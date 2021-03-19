import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpfService {

  constructor( private http: HttpClient) {
    console.log('Spfapp lista');
   }

   getnewrelase(){

    const headers = new HttpHeaders ({

   'Authorization' : 'Bearer BQATyQqdn-BGr5-Y5W3iYIlYwSffxfPfc0whmbD3Aln3P4HYH4TNI4BGd5aEfqI4yeEXXhfWMlr_sZoTSI8'
    }) ;
   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers});



   }
}
