import { Component, OnInit } from '@angular/core';
import { UiService } from '../shared/ui.service';
import { PersonService } from './shared/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  // booleans
  isLoading:boolean                    = true;

  constructor(
    private ui              : UiService,
    private persons         : PersonService,
  ) { }

  ngOnInit(): void {
    this.fetchPersons();
  }

  fetchPersons() {

    this.persons.fetchPersons()
    .subscribe(data => {
        if(data.status == 'success') {
          console.log(data);
          this.isLoading                = false;
        } else {
          this.ui.showSnackbar("Something is wrong with the API call. Please try again. If you continue to have issue please notify the tech team.", "failure");
        }
    }, err => {
      this.ui.showSnackbar("Something is wrong with the API call. Please try again. If you continue to have issue please notify the tech team.", "failure");
    });

  }

}
