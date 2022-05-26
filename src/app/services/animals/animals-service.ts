import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";
import {Animals} from "../../class/animals";

export interface Get {
  code: number,
  data: any
}

@Injectable()
export class AnimalsService implements OnDestroy {

  public animals: Animals;
  public indicatorModalAddAnimals = false;
  public addAnimalsIndicator = false;
  public indicatorModalEditAnimals = false;
  public editAnimalsIndicator = false;
  public animalsIdForEdit = '';
  public arrayForEdit: any;


  constructor(private http: HttpClient,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnDestroy() {
  }

  public getAnimals() {
    const url = `${environment.serverUrl}/api/animals`;
    this.http.get<Get>(url).subscribe((data) => {
      this.animals = data['data'];
      console.log(this.animals);
    });
  }

  public addAnimals(body: any) {
    const url = `${environment.serverUrl}/api/add-animals`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.addAnimalsIndicator = true;
        console.log(this.addAnimalsIndicator);
      } else {
        this.addAnimalsIndicator = false;
        console.log(this.addAnimalsIndicator);
      }
    }, error => {
      this.addAnimalsIndicator = false;
      console.log(this.addAnimalsIndicator);
    });
  }

  public openModalAddAnimals() {
    this.indicatorModalAddAnimals = true;
    console.log(this.indicatorModalAddAnimals);
  }

  public closeModalAddAnimals() {
    this.indicatorModalAddAnimals = false;
    console.log(this.indicatorModalAddAnimals);
  }

  public editAnimals(body: any) {
    const url = `${environment.serverUrl}/api/edit-animals`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.editAnimalsIndicator = true;
        console.log(this.editAnimalsIndicator);
      } else {
        this.editAnimalsIndicator = false;
        console.log(this.editAnimalsIndicator);
      }
    }, error => {
      this.editAnimalsIndicator = false;
      console.log(this.editAnimalsIndicator);
    });
  }

  public openModalEditAnimals(item: any) {
    this.indicatorModalEditAnimals = true;
    this.animalsIdForEdit = item.id;
    this.arrayForEdit = item;
    console.log(this.arrayForEdit);
  }

  public closeModalEditAnimals() {
    this.indicatorModalEditAnimals = false;
    console.log(this.indicatorModalEditAnimals);
  }

}
