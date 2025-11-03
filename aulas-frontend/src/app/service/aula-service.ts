import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Aula } from '../models/aula';

@Injectable({
  providedIn: 'root',
})
export class AulaService {
  
  private apiUrl = 'http://localhost:8081/api/aulas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAulas(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getAula(id: number): Observable<Aula> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Aula>(url).pipe(
      catchError(this.handleError)
    );
  }

  createAula(aula: Aula): Observable<Aula> {
    return this.http.post<Aula>(this.apiUrl, aula, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateAula(id: number, aula: Aula): Observable<Aula> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Aula>(url, aula, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteAula(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAulasPorTipo(tipo: string): Observable<Aula[]> {
    const url = `${this.apiUrl}/tipo/${tipo}`;
    return this.http.get<Aula[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getAulasDisponibles(): Observable<Aula[]> {
    const url = `${this.apiUrl}/disponibles`;
    return this.http.get<Aula[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Ocurrio un error: ', error);

    return throwError(() => new Error('Error en el servidor'));
  }
}
