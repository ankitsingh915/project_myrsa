import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"add", component:AddstudentComponent
  },
  {
    path:"list", component: StudentlistComponent
  },
  {
    path:"update/:eid",component: UpdatestudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
