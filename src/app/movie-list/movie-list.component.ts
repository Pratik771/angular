import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movies;
  constructor(public service: DataService) { 
    this.getdata();
    
  }
 
  ngOnInit() {
  }
  getdata() {
    this.service.getdata().subscribe((res) => {
     this.movies = res;

    });

  }
  deletedata(no) {
    this.service.deletedata(no).subscribe(() => {

    });

  }

}
