import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formresidence',
  templateUrl: './formresidence.component.html',
  styleUrls: ['./formresidence.component.css']
})
export class FormresidenceComponent implements OnInit {
  residenceform!:FormGroup;
  ngOnInit(): void {
    this.residenceform=new FormGroup({
      id:new FormControl('',[Validators.required,Validators.pattern('^[1-9]*$')]),
      name:new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z]*$')]),
      adress:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      image:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
    })

  }
  get id(){return this.residenceform.get('id')}
get name(){return this.residenceform.get('name')}
get adress(){return this.residenceform.get('adress')}

/*isFieldInvalid(fieldName: string): boolean {
  const field = this.residenceform.get(fieldName);
  return !!field && field.invalid && (field.dirty || field.touched);
}[class.error]="isFieldInvalid('name')"*/

  add(){
    console.log("notre forme : "+JSON.stringify(this.residenceform.value))
  };

}
