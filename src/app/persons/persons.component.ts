import { Component, OnInit } from '@angular/core';
import { UiService } from '../shared/ui.service';
import { Person, PersonService } from './shared/person.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  // booleans
  isLoading:boolean         = true;

  // other variables
  personsData:Person | any  = [];

  constructor(
    private ui              : UiService,
    private persons         : PersonService,
  ) { 
    AOS.init();
  }

  ngOnInit(): void {
    this.fetchPersons();
  }

  fetchPersons() {
    // fetch all persons
    this.persons.fetchPersons()
    .subscribe(result => {
        if(result.status == 'success') {
          this.personsData  = result.data.map(item => ({...item, showText: false})); // add a new key 'showText' to each item in the array
          this.isLoading    = false;
        } else {
          this.ui.showSnackbar("Something is wrong with the API call. Please try again. If you continue to have issue please notify the tech team.", "failure");
        }
    }, err => {
      this.ui.showSnackbar("Something is wrong with the API call. Please try again. If you continue to have issue please notify the tech team.", "failure");
    });
  }

}
