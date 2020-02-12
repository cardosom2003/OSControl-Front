import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cliente} from './cliente';
import {tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = 'http://localhost:3000/cliente';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Cliente[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
