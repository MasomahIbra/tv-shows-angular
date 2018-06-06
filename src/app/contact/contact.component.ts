import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string;
  lat: number;
  lng: number;

  constructor() { }

  ngOnInit() {
    this.title = ' Contact Page';
    this.lat = 46.155522;
    this.lng = -1.152450;
  }

}
