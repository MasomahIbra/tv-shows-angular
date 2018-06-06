import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  searchMovie: string;
  constructor() { }

  ngOnInit() {
    this.searchMovie ="";
  }

  onSubmit(){
    console.log(this.searchMovie);
  }
}
