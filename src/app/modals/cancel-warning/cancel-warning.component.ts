import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-cancel-warning',
  templateUrl: './cancel-warning.component.html',
  styleUrls: ['./cancel-warning.component.scss']
})
export class CancelWarningComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<CancelWarningComponent>) { }

  ngOnInit(): void {
    console.log(`******************** matDialogRef`, this.matDialogRef);
  }

  onClickButton(value: boolean): void {
    // this.matDialogRef.close(value);
  }


}
