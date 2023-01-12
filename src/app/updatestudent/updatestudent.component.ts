import { StdServService } from './../std-serv.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent {

constructor(private serv: StdServService, private actv : ActivatedRoute){}

Dataid:any
ngOnInit(){
  this.actv.params.subscribe((id)=>{
    this.Dataid = id['eid']
    console.log(id)
  })
}

  updateAPIForm = new FormGroup({
    id: new FormControl(),
    nm: new FormControl(),
    mobile: new FormControl(),
    addr: new FormControl(),
  });


  submitForm(){
    console.log(this.updateAPIForm.value)
    this.serv.updateApi(this.updateAPIForm.value,this.Dataid).subscribe(()=>{
      alert("Student Data added Successfully!")
    })
  }


}






