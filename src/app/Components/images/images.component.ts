import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../Services/images.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  constructor(private service: ImagesService) { }
  ngOnInit() {}

}
