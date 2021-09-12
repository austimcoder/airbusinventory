import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OldNewContainer } from '../models/old-new-container';
import { Product } from '../models/product';
import { cloneDeep } from 'lodash'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  category = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  units = new FormControl('', [Validators.required]);
  container : OldNewContainer<Product> = new OldNewContainer<Product>();

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product) {
      this.container.new = cloneDeep(data);
      this.container.old = cloneDeep(data);
     }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
