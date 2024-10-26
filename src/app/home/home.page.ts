import { Component, OnInit } from '@angular/core';
import { DatosPelisService } from './datos-pelis.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
catalogo:any;
  constructor(
    private DatosPelisService:DatosPelisService
  ) {}
  ngOnInit(): void {

    const pelis=localStorage.getItem('pelis');
    if(pelis){
      console.log('pelis traidas desde local');
      this.catalogo=JSON.parse(pelis);
    }else{
      
      this.DatosPelisService.obtenerPelis().subscribe((pelis)=>{
        this.catalogo=pelis;
        console.log('productos cargados desde la API');
        localStorage.setItem('pelis',JSON.stringify(this.catalogo));
      });
    }
  }
}
