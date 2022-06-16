import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class AutorizationService implements OnDestroy {

  public signInErrorIndicator = false;
  public signInIndicator = false;

  constructor(private http: HttpClient,
              private route: Router,
              private router: ActivatedRoute) {
  }

  public signIn(body: any) {
    const url = `${environment.serverUrl}/api/sign-in`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
       if (response.message === 'User found') {
         this.signInIndicator = true;
         this.route.navigate(['animals']).then();
       } else {
         this.signInIndicator = false;
       }
      } else {
        this.signInIndicator = false;
      }
    }, error => {
      this.signInIndicator = false;
    });
  }

  ngOnDestroy() {
  }

}
