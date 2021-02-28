import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

// person interface
export interface Person {
  id            : number;
  biography     : string;
  date_of_birth : string;
  name          : string;
  metadata      : {
    tags        :Array<string>
  },
  showText      : boolean
}

// api result interface
interface fetchPersonsResult {
  status        : string,
  data          : Person[]
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http      : HttpClient,
  ) { }
  
  // fetch all persons 
  // /v1/persons
  fetchPersons() {
    return this.http.get<fetchPersonsResult>(environment.apiUrl + '/v1/persons');
  } 

}
