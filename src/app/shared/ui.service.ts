import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showSnackbar(message: string, status: string, duration: number = 4000) {
    this.snackBar.open(message, '', {
      duration,
      panelClass: 'mat-snack-bar-container-'+status
    })
  }

}
