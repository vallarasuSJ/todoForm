import { Component } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
})
export class DetailsPageComponent {
  constructor() {}

  details: array[] = [
    { id: 1, name: 'kv', email: 'kv@gmail.com', phone: 3789203 },
    { id: 2, name: 'akash', email: 'akash@gmail.com', phone: 373428743 },
    { id: 3, name: 'sridhar', email: 'sridhar@gmail.com', phone: 3783423 },
  ];

  name: string = '';
  email: string = '';
  buttonText:string='ADD';
  phone:any;
  editId:number=0;

  edit(id: number): void{ 
    this.editId=id; 
    this.buttonText="EDIT";  
    let detail:any=this.details.find((c)=>c.id===id);
    this.name=detail.name;
    this.phone=detail.phone;
    this.email=detail.email;
  }

  //delete details
  delete(id: number): void{
    this.details=this.details.filter((c)=>c.id!==id);
   // this.editId=id; 

  }

  //add details
  add(): void {
    if(this.editId===0){
    let detail = {
      id: this.details.length + 1,
      name: this.name,
      email: this.email,
      phone: this.phone,
    }; 
    console.log(detail);
    this.details.push(detail);
  }
  else{
    let detail={ 
      id:this.editId, 
      name:this.name,
      email:this.email,
      phone:this.phone,
    }
    this.details.map((c)=>{
      if(c.id===detail.id){
        return (c.id=detail.id,
        c.name=detail.name,
        c.email=detail.email,
        c.phone=detail.phone
        )
      }
    })
   // this.details.push(detail);
    this.buttonText="ADD";
  }
  this.name="";
  this.email="";
  this.phone="";
}
}
type array = {
  id: number;
  name: string;
  email: string;
  phone: number;
};
