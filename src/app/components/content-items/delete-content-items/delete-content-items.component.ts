import {Component, OnInit} from '@angular/core';
import {ContentItemsService} from "../../../services/content-items/content-items-service";

@Component({
  selector: 'app-delete-content-items',
  templateUrl: './delete-content-items.component.html',
  styleUrls: ['./delete-content-items.component.css']
})
export class DeleteContentItemsComponent implements OnInit {

  constructor(public contentItemsService: ContentItemsService) {
  }

  ngOnInit() {
  }

  deleteData() {
    const body = {
      id: this.contentItemsService.contentItemsIdForDelete
    }
    this.contentItemsService.deleteContentItems(body);
    this.contentItemsService.getContentItems();
    this.contentItemsService.closeModalDeleteContentItems();
  }

}
