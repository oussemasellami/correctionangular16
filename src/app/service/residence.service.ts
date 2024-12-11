import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http:HttpClient) { }

  getnumber(list:any,creteria:string,value:any){
    console.log('hello 4arctic5')
    let n=0
    for(let i in list){
      if(list[i][creteria]==value){
        n++
      }
    }
    return n
  }


  getresidence():Observable<Residence[]>{
    return this.http.get<Residence[]>('http://localhost:3000/residence')
  }
  
  getresidencebyid(id:any):Observable<Residence[]>{
    return this.http.get<Residence[]>('http://localhost:3000/residence'+'/'+id)
  }


  addappart(resid:Residence):Observable<Residence[]>{
    return this.http.post<Residence[]>('http://localhost:3000/residence',resid)
  }

  deleteappart(id:any):Observable<Residence[]>{
    return this.http.delete<Residence[]>('http://localhost:3000/residence'+'/'+id)
  }
  update(id:any,resid:Residence):Observable<Residence[]>{
    return this.http.put<Residence[]>('http://localhost:3000/residence'+'/'+id,resid)
  }
}
