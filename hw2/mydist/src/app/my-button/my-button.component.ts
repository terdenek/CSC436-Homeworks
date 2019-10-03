import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  isImageLiked: Boolean = false;
  statuses: [String] = [""];

  constructor(private myService: MyServiceService) { }

  buttonClick() {
    this.isImageLiked = this.myService.likeImage(this.isImageLiked);
    this.statuses.push("Image is liked == " + this.isImageLiked);
  }

  ngOnInit() {
  }

}
