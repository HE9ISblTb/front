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
    console.log(this.indicatorModalEditResponsible);
  }

}
