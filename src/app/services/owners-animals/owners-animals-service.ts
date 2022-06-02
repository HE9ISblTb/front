import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";
import {OwnersAnimals} from "../../class/owners-animals";

export interface Get {
  code: number,
  data: any
}

@Injectable()
export class OwnersAnimalsService implements OnDestroy {

  public owners_animals: OwnersAnimals;
  public indicatorModalAddOwnersAnimals = false;
  public addOwnersAnimalsIndicator = false;
  public indicatorModalEditOwnersAnimals = false;
  public editOwnersAnimalsIndicator = false;
  public ownersAnimalsIdForEdit = '';
  public arrayForEdit: any;
  public ownersAnimalsIdForDelete = '';
  public deleteOwnersAnimalsIndicator = false;
  public indicatorModalDeleteOwnersAnimals = false;

  constructor(private http: HttpClient,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnDestroy() {
  }

  public getOwnersAnimals() {
    const url = `${environment.serverUrl}/api/owners`;
    this.http.get<Get>(url).subscribe((data) => {
      this.owners_animals = data['data'];
      console.log(this.owners_animals);
    });
  }

  public addOwnersAnimals(body: any) {
    const url = `${environment.serverUrl}/api/add-owners`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.addOwnersAnimalsIndicator = true;
        console.log(this.addOwnersAnimalsIndicator);
      } else {
        this.addOwnersAnimalsIndicator = false;
        console.log(this.addOwnersAnimalsIndicator);
      }
    }, error => {
      this.addOwnersAnimalsIndicator = false;
      console.log(this.addOwnersAnimalsIndicator);
    });
  }

  public openModalAddOwnersAnimals() {
    this.indicatorModalAddOwnersAnimals = true;
    console.log(this.indicatorModalAddOwnersAnimals);
  }

  public closeModalAddOwnersAnimals() {
    this.indicatorModalAddOwnersAnimals = false;
    console.log(this.indicatorModalAddOwnersAnimals);
  }

  public editOwnersAnimals(body: any) {
    const url = `${environment.serverUrl}/api/edit-owners`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.editOwnersAnimalsIndicator = true;
        console.log(this.editOwnersAnimalsIndicator);
      } else {
        this.editOwnersAnimalsIndicator = false;
        console.log(this.editOwnersAnimalsIndicator);
      }
    }, error => {
      this.editOwnersAnimalsIndicator = false;
      console.log(this.editOwnersAnimalsIndicator);
    });
  }

  public openModalEditOwnersAnimals(item: any) {
    this.indicatorModalEditOwnersAnimals = true;
    this.ownersAnimalsIdForEdit = item.id;
    this.arrayForEdit = item;
    console.log(this.arrayForEdit);
  }

  public closeModalEditAnimals() {
    this.indicatorModalEditOwnersAnimals = false;
    console.log(this.indicatorModalEditOwnersAnimals);
  }

  public deleteOwnersAnimals(id: any) {
    const url = `${environment.serverUrl}/api/delete-owners`;
    this.http.post<any>(url, id).subscribe((response) => {
      this.deleteOwnersAnimalsIndicator = true;
      console.log(this.deleteOwnersAnimalsIndicator);
    }, error => {
      console.log(this.deleteOwnersAnimalsIndicator);
    });
  }

  public openModalDeleteOwnersAnimals(id: any) {
    this.ownersAnimalsIdForDelete = id;
    this.indicatorModalDeleteOwnersAnimals = true;
    console.log(this.indicatorModalDeleteOwnersAnimals);
  }

  public closeModalDeleteOwnersAnimals() {
    this.indicatorModalDeleteOwnersAnimals = false;
    console.log(this.indicatorModalDeleteOwnersAnimals);
  }

}
