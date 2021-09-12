import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-services.service';
import { CreateNewComponent } from '../create-new/create-new.component';
import { OldNewContainer } from '../models/old-new-container';
import { UpdateComponent } from '../update/update.component';
import { isEqual } from 'lodash';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products : Product[];
  dataSource : MatTableDataSource<Product>;
  categoryName = "";
  username = "";

  displayedColumns = ["id","category","name","description","units","edit"]

  constructor(private productService : ProductService, private changeDetectorRef : ChangeDetectorRef, 
    private dialog : MatDialog, private keyCloak : KeycloakService) { 
    }

  ngOnInit(): void {
    this.loadAllProducts();
    this.loadProfile();
    this.dataSource = new MatTableDataSource<Product>(this.products);
  }
  async loadAllProducts() {
    this.products = await this.productService.list();
    this.dataSource.data = this.products;
    this.changeDetectorRef.detectChanges();
  }

  applyFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openCreateDialog(){
    const dialogRef = this.dialog.open(CreateNewComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.create(result);
      }
      
    });
  }

  openUpdateDialog(product: Product){
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '300px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.update(result);
      }
      
    });
  }

  async create(product: Product) {
    await this.productService.create(product);
    this.loadAllProducts();
    window.alert("Created Successfuly!!");
  }

  async update(container: OldNewContainer<Product>){
    if(!isEqual(container.old , container.new )){
      await this.productService.update(container.new);
      this.loadAllProducts();
      window.alert("Updated Successfuly!!");
    } else {
      window.alert("No Update found!!");
    }
  }

  async searchByCategory(){
    this.products = await this.productService.searchByCategory(this.categoryName);
    this.dataSource.data = this.products;
    this.changeDetectorRef.detectChanges();
  }

  logout(){
    this.keyCloak.logout();
  }

  async loadProfile(){
    let keycloak = await this.keyCloak.loadUserProfile();
    this.username = `${keycloak.firstName} ${keycloak.lastName}`;
  }

}
