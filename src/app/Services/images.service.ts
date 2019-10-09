import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http:HttpClient) { }
  private ApiKey: string = environment.API_KEY;
  private Url: string = environment.URL;
  private searchTxt:string;

  getImages(searchTxt):Observable<any[]>{
    return this.http.get<any[]>(`${this.Url}${this.ApiKey}&q=${this.searchTxt}&image_type=photo`);
  }

}
