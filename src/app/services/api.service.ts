// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPostForm } from '../models/form/user-post-form'; 
import { UserCompleteDto } from '../models/dtos/user-complete-dto';  
import { ICitiesDto } from '../models/dtos/cities-dto';
import { ICountryDto } from '../models/dtos/countries-dto'; 
import { IStatesDto } from '../models/dtos/states-dto';
import { tap, catchError } from 'rxjs/operators';
import { EventDto } from '../app.module';



@Injectable({
  providedIn: 'root'
})
  
  
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(userForm: UserPostForm): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, userForm);
  }

  getAll(): Observable<UserCompleteDto[]> {
    return this.http.get<UserCompleteDto[]>(`${this.apiUrl}/users`);
  }

  getUserById(id: number): Observable<UserCompleteDto> {
    return this.http.get<UserCompleteDto>(`${this.apiUrl}/users/${id}`);
  }

  updateUser(id: number, userForm: UserPostForm): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${id}`, userForm);
  }

  deleteUserId(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

  getAllCities(stateId: number): Observable<ICitiesDto[]> {
    const params = new HttpParams().set("cid_nr_id", stateId.toString());
    return this.http.get<ICitiesDto[]>(`${this.apiUrl}/cities`, { params });
  }

  getAllCountries(): Observable<ICountryDto[]> {
    return this.http.get<ICountryDto[]>(`${this.apiUrl}/countries`);
  }

  getAllStates(id: number): Observable<IStatesDto[]> {
    const params = new HttpParams().set("pai_nr_id", id.toString());
    return this.http.get<IStatesDto[]>(`${this.apiUrl}/states`, { params });
  }

  getAllCitiesByState(stateId: number): Observable<ICitiesDto[]> {
    const params = new HttpParams().set("est_nr_id", stateId.toString());
    return this.http.get<ICitiesDto[]>(`${this.apiUrl}/cities`, { params });
  }

}
  export class EventService {
  private apiUrl = 'http://localhost:3000/events'; // Substitua pela sua URL de API

  constructor(private http: HttpClient) { }

  register(event: EventDto): Observable<EventDto> {
    return this.http.post<EventDto>(`${this.apiUrl}/register`, event);
  }

  update(event: EventDto): Observable<EventDto> {
    return this.http.put<EventDto>(`${this.apiUrl}/update/${event.eveNrId}`, event);
  }

  list(): Observable<EventDto[]> {
    return this.http.get<EventDto[]>(`${this.apiUrl}/list`);
  }

  getById(eventId: number): Observable<EventDto> {
    return this.http.get<EventDto>(`${this.apiUrl}/getById/${eventId}`);
  }

  delete(eventId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${eventId}`);
  }

}

