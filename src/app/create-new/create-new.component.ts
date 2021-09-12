import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../models/product';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  product = new Product();

  category = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  units = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<CreateNewComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
