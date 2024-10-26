import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Catalogo {
  userId: number
  id: number
  title: string
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DatosPelisService {
private url='https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100'
  constructor(
    private http:HttpClient
  ) { }
  obtenerPelis():Observable<Catalogo[]>{
    return this.http.get<Catalogo[]>(this.url);
  }
}
