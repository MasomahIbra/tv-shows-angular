import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MoviesService} from '../share/themoviedb.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  lesMovies$: Observable<any>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.lesMovies$  = this.moviesService.getDonnees();
    // console.log(this.lesMovies$);
  }

}
