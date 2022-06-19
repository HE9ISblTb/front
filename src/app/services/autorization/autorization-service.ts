import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from "@angular/router";
import {appService} from '../app-service'

@Injectable()
export class AutorizationService implements OnDestroy {

  public signInErrorIndicator = false;

  constructor(private http: HttpClient,
              private route: Router,
              private appService: appService) {
  }

  public signIn(body: any) {
    const url = `${environment.serverUrl}/api/sign-in`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        if (response.message === 'User found') {
          this.appService.signIn();
          this.route.navigate(['animals']).then();
        } else {
          this.appService.signOut();
        }
      } else {
        this.appService.signOut();
      }
    }, error => {
      this.appService.signOut();
    });
  }

  ngOnDestroy() {
  }

}
