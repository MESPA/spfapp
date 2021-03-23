import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpfService {

  constructor( private http: HttpClient) {
    console.log('Spfapp lista');
   }

   getnewrelase(){

    const headers = new HttpHeaders ({

   'Authorization' : 'Bearer BQCjgUAVKMJNWCVOmzVhrKPxg4DHaxf9eHSKDu3CUYFt3IAXe9tkN4txOgqt91n5pIpWTNTHUTPLw0BS0cA'
    }) ;
   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers}).pipe(map( (data) =>
   {

         return data['albums'].items;

   }));
   }

   getartista(buscar:string){

    const headers = new HttpHeaders ({

      'Authorization' : 'Bearer BQCjgUAVKMJNWCVOmzVhrKPxg4DHaxf9eHSKDu3CUYFt3IAXe9tkN4txOgqt91n5pIpWTNTHUTPLw0BS0cA'
       }) ;
      return this.http.get(`https://api.spotify.com/v1/search?q=${buscar}&type=artist&limit=15`,{ headers}).pipe(map( (data) =>
      {

            return data['artists'].items;

      }));

   }
}
