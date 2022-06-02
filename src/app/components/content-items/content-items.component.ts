import {Component, OnInit} from '@angular/core';
import {ContentItemsService} from "../../services/content-items/content-items-service";

@Component({
  selector: 'app-content-items',
  templateUrl: './content-items.component.html',
  styleUrls: ['./content-items.component.css']
})
export class ContentItemsComponent implements OnInit {

  public header = ['id', 'Наименнование', 'ФИО владельца', 'Номер телефона', 'Оплата'];

  constructor(public contentItemsService: ContentItemsService) {
  }

  ngOnInit() {
    this.contentItemsService.getContentItems();
  }
}
