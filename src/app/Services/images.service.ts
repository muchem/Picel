import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http:HttpClient) { }
  private ApiKey: string ='?key=13875463-5946a46e49401d6e5a6de2d2b';
  private Url: string = 'https://pixabay.com/api/';
  searchTxt:string;
  
  getImages():Observable<any>{
    return this.http.get<any>(`${this.Url}${this.ApiKey}&image_type=photo`);
  }

}
