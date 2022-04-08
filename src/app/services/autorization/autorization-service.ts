import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class AutorizationService implements OnDestroy {
  constructor(private http: HttpClient) {
  }

  ngOnDestroy() {
  }

}
