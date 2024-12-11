import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-upadate',
  templateUrl: './upadate.component.html',
  styleUrls: ['./upadate.component.css']
})
export class UpadateComponent implements OnInit{
idp!:number
residenceform!:FormGroup
listres:Residence[]=[]
  constructor(private act:ActivatedRoute ,private resService:ResidenceService,private router:Router){}
  ngOnInit(): void {
    this.idp=this.act.snapshot.params['id']
    this.residenceform=new FormGroup({
      //id:new FormControl('',[Validators.required,Validators.pattern(/^[1-9]*$/)]),
      name:new FormControl('',[Validators.required, Validators.pattern(/^[A-Z]/)]),
      //name:new FormControl('',[Validators.required, Validators.pattern(/^[A-Za-z]*$/)]),
      address:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      image:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
    })
this.resService.getresidencebyid(this.idp).subscribe((data)=>{
this.listres=data
this.residenceform.patchValue(this.listres as any)
})

  }
  get id(){return this.residenceform.get('id')}
get name(){return this.residenceform.get('name')}
get address(){return this.residenceform.get('adress')}


update(){
  this.resService.update(this.idp,this.residenceform.value).subscribe(()=>{
    console.log('updated')
    this.router.navigate(['/residences'])

  })
}
}
