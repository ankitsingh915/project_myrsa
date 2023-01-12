import { StdServService } from './../std-serv.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {

  constructor(private serv: StdServService){}

  addAPIForm = new FormGroup({
    id: new FormControl(),
    nm: new FormControl(),
    mobile: new FormControl(),
    addr: new FormControl(),
  });


  submitForm(){
    console.log(this.addAPIForm.value)
    this.serv.addApi(this.addAPIForm.value).subscribe((mdata)=>{
      alert("Student Data added Successfully!")
    })
  }
}
