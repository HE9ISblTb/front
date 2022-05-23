import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";

export interface Get {
  code: number,
  data: any
}

@Injectable()
export class ContentItemsService implements OnDestroy {

  public content_items: any;

  constructor(private http: HttpClient,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnDestroy() {
  }

  public getContentItems() {
    const url = `${environment.serverUrl}/api/content`;
    this.http.get<Get>(url).subscribe((data) => {
      this.content_items = data['data'];
      console.log(this.content_items);
    });
  }

}
