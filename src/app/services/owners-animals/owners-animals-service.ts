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
    });
  }

  public addOwnersAnimals(body: any) {
    const url = `${environment.serverUrl}/api/add-owners`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.addOwnersAnimalsIndicator = true;
      } else {
        this.addOwnersAnimalsIndicator = false;
      }
    }, error => {
      this.addOwnersAnimalsIndicator = false;
    });
  }

  public editOwnersAnimals(body: any) {
    const url = `${environment.serverUrl}/api/edit-owners`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.editOwnersAnimalsIndicator = true;
      } else {
        this.editOwnersAnimalsIndicator = false;
      }
    }, error => {
      this.editOwnersAnimalsIndicator = false;
    });
  }

  public deleteOwnersAnimals(id: any) {
    const url = `${environment.serverUrl}/api/delete-owners`;
    this.http.post<any>(url, id).subscribe((response) => {
      this.deleteOwnersAnimalsIndicator = true;
    }, error => {
    });
  }

  public openModalAddOwnersAnimals() {
    this.indicatorModalAddOwnersAnimals = true;
  }

  public closeModalAddOwnersAnimals() {
    this.indicatorModalAddOwnersAnimals = false;
  }

  public openModalEditOwnersAnimals(item: any) {
    this.indicatorModalEditOwnersAnimals = true;
    this.ownersAnimalsIdForEdit = item.id;
    this.arrayForEdit = item;
  }

  public closeModalEditAnimals() {
    this.indicatorModalEditOwnersAnimals = false;
  }

  public openModalDeleteOwnersAnimals(id: any) {
    this.ownersAnimalsIdForDelete = id;
    this.indicatorModalDeleteOwnersAnimals = true;
  }

  public closeModalDeleteOwnersAnimals() {
    this.indicatorModalDeleteOwnersAnimals = false;
  }

}
