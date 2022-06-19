import {Component, OnInit} from '@angular/core';
import {ContentItemsService} from "../../services/content-items/content-items-service";
import {appService} from "../../services/app-service";

@Component({
  selector: 'app-content-items',
  templateUrl: './content-items.component.html',
  styleUrls: ['./content-items.component.css']
})
export class ContentItemsComponent implements OnInit {

  public header = ['id', 'Наименнование', 'ФИО владельца', 'Номер телефона', 'Оплата'];

  constructor(public contentItemsService: ContentItemsService,
              public appService: appService) {
  }

  ngOnInit() {
    this.contentItemsService.getContentItems();
    this.appService.signIn();
  }
}
