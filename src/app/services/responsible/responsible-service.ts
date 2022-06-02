import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";
import {Responsible} from "../../class/responsible";

export interface Get {
  code: number,
  data: any
}

@Injectable()
export class ResponsibleService implements OnDestroy {

  public responsible: Responsible;
  public indicatorModalAddResponsible = false;
  public addResponsibleIndicator = false;
  public indicatorModalEditResponsible = false;
  public editResponsibleIndicator = false;
  public responsibleIdForEdit = '';
  public arrayForEdit: any;
  public responsibleIdForDelete = '';
  public deleteResponsibleIndicator = false;
  public indicatorModalDeleteResponsible = false;

  constructor(private http: HttpClient,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnDestroy() {
  }

  public getResponsible() {
    const url = `${environment.serverUrl}/api/responsible`;
    this.http.get<Get>(url).subscribe((data) => {
      this.responsible = data['data'];
      console.log(this.responsible);
    });
  }

  public addResponsible(body: any) {
    const url = `${environment.serverUrl}/api/add-responsible`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.addResponsibleIndicator = true;
        console.log(this.addResponsibleIndicator);
      } else {
        this.addResponsibleIndicator = false;
        console.log(this.addResponsibleIndicator);
      }
    }, error => {
      this.addResponsibleIndicator = false;
      console.log(this.addResponsibleIndicator);
    });
  }

  public openModalAddResponsible() {
    this.indicatorModalAddResponsible = true;
    console.log(this.indicatorModalAddResponsible);
  }

  public closeModalAddResponsible() {
    this.indicatorModalAddResponsible = false;
    console.log(this.indicatorModalAddResponsible);
  }

  public editResponsible(body: any) {
    const url = `${environment.serverUrl}/api/edit-responsible`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.editResponsibleIndicator = true;
        console.log(this.editResponsibleIndicator);
      } else {
        this.editResponsibleIndicator = false;
        console.log(this.editResponsibleIndicator);
      }
    }, error => {
      this.editResponsibleIndicator = false;
      console.log(this.editResponsibleIndicator);
    });
  }

  public openModalEditResponsible(item: any) {
    this.indicatorModalEditResponsible = true;
    this.responsibleIdForEdit = item.id;
    this.arrayForEdit = item;
    console.log(this.arrayForEdit);
  }

  public closeModalEditResponsible() {
    this.indicatorModalEditResponsible = false;
    console.log(this.indicatorModalEditResponsible);
  }

  public deleteResponsible(id: any) {
    const url = `${environment.serverUrl}/api/delete-responsible`;
    this.http.post<any>(url, id).subscribe((response) => {
      this.deleteResponsibleIndicator = true;
      console.log(this.deleteResponsibleIndicator);
    }, error => {
      console.log(this.deleteResponsibleIndicator);
    });
  }

  public openModalDeleteResponsible(id: any) {
    this.responsibleIdForDelete = id;
    this.indicatorModalDeleteResponsible = true;
    console.log(this.indicatorModalDeleteResponsible);
  }

  public closeModalDeleteResponsible() {
    this.indicatorModalDeleteResponsible = false;
    console.log(this.indicatorModalDeleteResponsible);
  }

}
