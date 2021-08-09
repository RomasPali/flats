import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat } from '../files/flat.model';
import { SearchDTO } from '../files/SearchDTO.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Flat[]>('http://localhost:8080/flats');
  }

  findById(id: any) {
    return this.http.get<Flat>(`http://localhost:8080/flats/${id}`);
  }

  deleteById(id: any) {
    return this.http.delete(`http://localhost:8080/flats/${id}`);
  }

  update(id: any, flat: Flat) {
    return this.http.put(`http://localhost:8080/flats/${id}`, flat);
  }

  create(flat: Flat){
    return this.http.post(`http://localhost:8080/flats/`, flat);
  }

  search(search: SearchDTO):Observable<Flat[]> {
    return this.http.post<Flat[]>(`http://localhost:8080/search/`, search);
  }
}
