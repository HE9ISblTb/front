import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class AnimalsService implements OnDestroy {

  constructor(private http: HttpClient,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnDestroy() {
  }

}
