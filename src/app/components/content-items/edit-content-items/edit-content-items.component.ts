import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContentItemsService} from "../../../services/content-items/content-items-service";

@Component({
  selector: 'app-edit-content-items',
  templateUrl: './edit-content-items.component.html',
  styleUrls: ['./edit-content-items.component.css']
})
export class EditContentItemsComponent implements OnInit {

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  constructor(public contentItemsService: ContentItemsService) {
  }

  ngOnInit() {
    this.contentItemsService.getContentItems();
    this.form = new FormGroup({
      name_content: new FormControl(this.contentItemsService.arrayForEdit.name_content, [
        Validators.required
      ]),
      full_name_owner: new FormControl(this.contentItemsService.arrayForEdit.full_name_owner, [
        Validators.required
      ]),
      phone_content_items: new FormControl(this.contentItemsService.arrayForEdit.phone_content_items, [
        Validators.required
      ]),
      payment: new FormControl(this.contentItemsService.arrayForEdit.payment, [
        Validators.required
      ]),
    });
  }

  editData() {
    if (this.form.valid) {
      const body = {
        id: this.contentItemsService.arrayForEdit.id,
        name_content: this.form.value.name_content,
        full_name_owner: this.form.value.full_name_owner,
        phone_content_items: this.form.value.phone_content_items,
        payment: this.form.value.payment
      }
      this.contentItemsService.editContentItems(body);
      this.contentItemsService.closeModalEditContentItems();
      this.contentItemsService.getContentItems();
    }
  }

}
