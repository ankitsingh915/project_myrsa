import { StdServService } from './../std-serv.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
   constructor(private serv : StdServService, private router: Router){}

   ngOnInit(){
    this.getDatafromAPI()
   }
    studentData:any

    getDatafromAPI(){
      this.serv.getapi().subscribe((data)=>{
        console.log(data)
        this.studentData=data
      })
    }

    delData(id:any){
      this.serv.delApi(id).subscribe(()=>{
        alert("Student Data Deleted!");
      });
    }

    edit(id:any){
      console.log(id)
      this.router.navigate(['/update',id])
    }
}
