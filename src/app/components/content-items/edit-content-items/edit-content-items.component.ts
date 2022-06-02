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

  constructor(public contentItemsServise: ContentItemsService) {
  }

  ngOnInit() {
    this.contentItemsServise.getContentItems();
    this.form = new FormGroup({
      name_content: new FormControl(this.contentItemsServise.arrayForEdit.name_content, [
        Validators.required
      ]),
      full_name_owner: new FormControl(this.contentItemsServise.arrayForEdit.full_name_owner, [
        Validators.required
      ]),
      phone: new FormControl(this.contentItemsServise.arrayForEdit.phone, [
        Validators.required
      ]),
      payment: new FormControl(this.contentItemsServise.arrayForEdit.payment, [
        Validators.required
      ]),
    });
  }

  editData() {
    if (this.form.valid) {
      const body = {
        id: this.contentItemsServise.arrayForEdit.id,
        name_content: this.form.value.name_content,
        full_name_owner: this.form.value.full_name_owner,
        phone: this.form.value.phone,
        payment: this.form.value.payment
      }
      this.contentItemsServise.editContentItems(body);
      this.contentItemsServise.closeModalEditContentItems();
      this.contentItemsServise.getContentItems();
    }
  }

}
