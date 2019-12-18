import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../Services/images.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ImagesService) { }
  results;
  ngOnInit() {
    this.service.getImages().subscribe(image =>{
     this.results=image.hits;
     console.log(this.results);
    })
  }

}
