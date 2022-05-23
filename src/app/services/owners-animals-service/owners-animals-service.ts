import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";

export interface Get {
  code: number,
  data: any
}

@Injectable()
export class OwnersAnimalsService implements OnDestroy {

  public owners_animals: any;

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

}
