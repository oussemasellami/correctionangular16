import { Component } from '@angular/core';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  searchname=""
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/residence1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/residence2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/residence3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/residence3.jpg", status: "En Construction"}
   ];
   listfavorit:Residence[]=[]
 
   showLocation(residence:Residence){
    if(residence.address==="inconnu"){
      alert(`l'adress de residence"${residence.name}"est inconnu`)
    }else{
      alert(`l'adress de residence"${residence.name}":"${residence.name}`)
    }   

   }


   addFavorite(residence:Residence){
    const index=this.listfavorit.findIndex(r=>r.id===residence.id)
    if(index >-1){
      this.listfavorit.splice(index,1)
    }else{
      this.listfavorit.push(residence)
    }

   }

   isFavorite(residence:Residence){
    return this.listfavorit.some(r=>r.id ===residence.id)
   }

   filterresidencebyname(){
    return this.listResidences.filter(residence=>residence.name.toLowerCase().includes(this.searchname.toLowerCase()))
   }
}
