import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  getdata()
  {
    return this.http.get('http://localhost:4000/movie/get');
  }

  addData(mdata) {
    return this.http.post('http://localhost:4000/movie/post',mdata);
  }

  deletedata(no)
  {
    return this.http.delete(`http://localhost:4000/movie/' + no`);
  }

}
