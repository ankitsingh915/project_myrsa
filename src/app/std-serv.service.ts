import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StdServService {

  constructor(private http: HttpClient) { }
  data:any
  getapi(){
    return this.http.get('http://localhost:3000/getStudent')
  }


  addApi(formData:any){
    return this.http.post('http://localhost:3000/addStudent',formData)
  }

  delApi(id:any){
    return this.http.delete(`http://localhost:3000/delStudent/${id}`)
  }

  updateApi(formData:any,id:any){
    return this.http.put(`http://localhost:3000/updateStudent/${id}`,formData)
  }


}
