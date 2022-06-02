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
      console.log(this.content_items);
    });
  }

  public addContentItems(body: any) {
    const url = `${environment.serverUrl}/api/add-content`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.addContentItemsIndicator = true;
        console.log(this.addContentItemsIndicator);
      } else {
        this.addContentItemsIndicator = false;
        console.log(this.addContentItemsIndicator);
      }
    }, error => {
      this.addContentItemsIndicator = false;
      console.log(this.addContentItemsIndicator);
    });
  }

  public openModalAddContentItems() {
    this.indicatorModalAddContentItems = true;
    console.log(this.indicatorModalAddContentItems);
  }

  public closeModalAddContentItems() {
    this.indicatorModalAddContentItems = false;
    console.log(this.indicatorModalAddContentItems);
  }

  public editContentItems(body: any) {
    const url = `${environment.serverUrl}/api/edit-content`;
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.code === 200) {
        this.editContentItemsIndicator = true;
        console.log(this.editContentItemsIndicator);
      } else {
        this.editContentItemsIndicator = false;
        console.log(this.editContentItemsIndicator);
      }
    }, error => {
      this.editContentItemsIndicator = false;
      console.log(this.editContentItemsIndicator);
    });
  }

  public openModalEditContentItems(item: any) {
    this.indicatorModalEditContentItems = true;
    this.contentItemsIdForEdit = item.id;
    this.arrayForEdit = item;
    console.log(this.arrayForEdit);
  }

  public closeModalEditContentItems() {
    this.indicatorModalEditContentItems = false;
    console.log(this.indicatorModalEditContentItems);
  }

  public deleteContentItems(id: any) {
    const url = `${environment.serverUrl}/api/delete-content`;
    this.http.post<any>(url, id).subscribe((response) => {
      this.deleteContentItemsIndicator = true;
      console.log(this.deleteContentItemsIndicator);
    }, error => {
      console.log(this.deleteContentItemsIndicator);
    });
  }

  public openModalDeleteContentItems(id: any) {
    this.contentItemsIdForDelete = id;
    this.indicatorModalDeleteContentItems = true;
    console.log(this.indicatorModalDeleteContentItems);
  }

  public closeModalDeleteContentItems() {
    this.indicatorModalDeleteContentItems = false;
    console.log(this.indicatorModalDeleteContentItems);
  }

}
