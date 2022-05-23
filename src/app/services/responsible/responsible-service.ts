import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";

export interface Get {
  code: number,
  data: any
}

@Injectable()
export class ResponsibleService implements OnDestroy {

  public responsible: any;

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

}
