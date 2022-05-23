import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";

export interface Get {
  code: number,
  data: any
}

@Injectable()
export class AnimalsService implements OnDestroy {

  public animals: any;

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

}
