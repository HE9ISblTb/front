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
    });
  }

  public addResponsible(body: any) {
    const url = `${environment.serverUrl}/api/add-responsible`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.addResponsibleIndicator = true;
      } else {
        this.addResponsibleIndicator = false;
      }
    }, error => {
      this.addResponsibleIndicator = false;
    });
  }

  public editResponsible(body: any) {
    const url = `${environment.serverUrl}/api/edit-responsible`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.editResponsibleIndicator = true;
      } else {
        this.editResponsibleIndicator = false;
      }
    }, error => {
      this.editResponsibleIndicator = false;
    });
  }

  public deleteResponsible(id: any) {
    const url = `${environment.serverUrl}/api/delete-responsible`;
    this.http.post<any>(url, id).subscribe((response) => {
      this.deleteResponsibleIndicator = true;
    }, error => {
    });
  }

  public openModalAddResponsible() {
    this.indicatorModalAddResponsible = true;
  }

  public closeModalAddResponsible() {
    this.indicatorModalAddResponsible = false;
  }

  public openModalEditResponsible(item: any) {
    this.indicatorModalEditResponsible = true;
    this.responsibleIdForEdit = item.id;
    this.arrayForEdit = item;
  }

  public closeModalEditResponsible() {
    this.indicatorModalEditResponsible = false;
  }

  public openModalDeleteResponsible(id: any) {
    this.responsibleIdForDelete = id;
    this.indicatorModalDeleteResponsible = true;
  }

  public closeModalDeleteResponsible() {
    this.indicatorModalDeleteResponsible = false;
  }

}
