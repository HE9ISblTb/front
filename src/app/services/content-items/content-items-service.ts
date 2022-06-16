import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";
import {ContentItems} from "../../class/content-items";

export interface Get {
  code: number,
  data: any
}

@Injectable()
export class ContentItemsService implements OnDestroy {

  public content_items: ContentItems;
  public indicatorModalAddContentItems = false;
  public addContentItemsIndicator = false;
  public indicatorModalEditContentItems = false;
  public editContentItemsIndicator = false;
  public contentItemsIdForEdit = '';
  public arrayForEdit: any;
  public contentItemsIdForDelete = '';
  public deleteContentItemsIndicator = false;
  public indicatorModalDeleteContentItems = false;

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
    });
  }

  public addContentItems(body: any) {
    const url = `${environment.serverUrl}/api/add-content`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.addContentItemsIndicator = true;
      } else {
        this.addContentItemsIndicator = false;
      }
    }, error => {
      this.addContentItemsIndicator = false;
    });
  }

  public editContentItems(body: any) {
    const url = `${environment.serverUrl}/api/edit-content`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.editContentItemsIndicator = true;
      } else {
        this.editContentItemsIndicator = false;
      }
    }, error => {
      this.editContentItemsIndicator = false;
    });
  }

  public deleteContentItems(id: any) {
    const url = `${environment.serverUrl}/api/delete-content`;
    this.http.post<any>(url, id).subscribe((response) => {
      this.deleteContentItemsIndicator = true;
    }, error => {
    });
  }

  public openModalAddContentItems() {
    this.indicatorModalAddContentItems = true;
  }

  public closeModalAddContentItems() {
    this.indicatorModalAddContentItems = false;
  }

  public openModalEditContentItems(item: any) {
    this.indicatorModalEditContentItems = true;
    this.contentItemsIdForEdit = item.id;
    this.arrayForEdit = item;
  }

  public closeModalEditContentItems() {
    this.indicatorModalEditContentItems = false;
  }

  public openModalDeleteContentItems(id: any) {
    this.contentItemsIdForDelete = id;
    this.indicatorModalDeleteContentItems = true;
  }

  public closeModalDeleteContentItems() {
    this.indicatorModalDeleteContentItems = false;
  }

}
