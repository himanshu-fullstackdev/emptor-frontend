import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http      : HttpClient,
  ) { }

  fetchPersons() {
    return this.http.get<any>(environment.apiUrl + '/v1/persons');
  } 

}
