import { Component, OnInit } from '@angular/core';


import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
mdata;
  constructor(public service: DataService, public router: Router) {
  
   }

  ngOnInit() {
  }

addData(data)
  {
    this.mdata = data.form.value;

    this.service.addData(this.mdata).subscribe(() => {
      this.router.navigate(['movie-list']);

    });
  }

}
