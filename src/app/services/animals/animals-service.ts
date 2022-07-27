import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Animals} from "../../class/animals";
import {FullAnimals} from "../../class/full-animals";

export interface Get {
  code: number,
  data: any
}

@Injectable()
export class AnimalsService implements OnDestroy {

  public animals: Animals;
  public fullAnimals: FullAnimals;
  public indicatorModalAddAnimals = false;
  public addAnimalsIndicator = false;
  public indicatorModalEditAnimals = false;
  public editAnimalsIndicator = false;
  public animalsIdForEdit = '';
  public arrayForEdit: any;
  public animalsIdForDelete = '';
  public deleteAnimalsIndicator = false;
  public indicatorModalDeleteAnimals = false;
  public indicatorModalFullAnimals = false;

  constructor(private http: HttpClient) {
  }

  ngOnDestroy() {
  }

  public getAnimals() {
    const url = `${environment.serverUrl}/api/animals`;
    this.http.get<Get>(url).subscribe((data) => {
      this.animals = data['data'];
    });
  }

  public getAttachedAnimals() {
    const url = `${environment.serverUrl}/api/attached-animals`;
    this.http.get<Get>(url).subscribe((data) => {
      this.animals = data['data'];
    });
  }

  public addAnimals(body: any) {
    const url = `${environment.serverUrl}/api/add-animals`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.addAnimalsIndicator = true;
      } else {
        this.addAnimalsIndicator = false;
      }
    }, error => {
      this.addAnimalsIndicator = false;
    });
  }

  public editAnimals(body: any) {
    const url = `${environment.serverUrl}/api/edit-animals`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.editAnimalsIndicator = true;
      } else {
        this.editAnimalsIndicator = false;
      }
    }, error => {
      this.editAnimalsIndicator = false;
    });
  }

  public deleteAnimals(id: any) {
    const url = `${environment.serverUrl}/api/delete-animals`;
    this.http.post<any>(url, id).subscribe((response) => {
      this.deleteAnimalsIndicator = true;
    }, error => {
    });
  }

  public getFullAnimal(id: any) {
    const body = {
      id: id
    }
    const url = `${environment.serverUrl}/api/full-animals`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.fullAnimals = response.data;
        this.openModalFullAnimals();
      } else {
      }
    }, error => {
    });
  }

  public openModalAddAnimals() {
    this.indicatorModalAddAnimals = true;
  }

  public closeModalAddAnimals() {
    this.indicatorModalAddAnimals = false;
  }

  public openModalEditAnimals(item: any) {
    this.indicatorModalEditAnimals = true;
    this.animalsIdForEdit = item.id;
    this.arrayForEdit = item;
  }

  public closeModalEditAnimals() {
    this.indicatorModalEditAnimals = false;
  }

  public openModalDeleteAnimals(id: any) {
    this.animalsIdForDelete = id;
    this.indicatorModalDeleteAnimals = true;
  }

  public closeModalDeleteAnimals() {
    this.indicatorModalDeleteAnimals = false;
  }

  public openModalFullAnimals() {
    this.indicatorModalFullAnimals = true;
  }

  public closeModalFullAnimals() {
    this.indicatorModalFullAnimals = false;
  }

}
