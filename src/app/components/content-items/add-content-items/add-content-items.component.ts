import {Component, OnInit} from '@angular/core';
import {ContentItemsService} from "../../../services/content-items/content-items-service";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-content-items',
  templateUrl: './add-content-items.component.html',
  styleUrls: ['./add-content-items.component.css']
})
export class AddContentItemsComponent implements OnInit {

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  constructor(public contentItemsService: ContentItemsService) {
  }

  ngOnInit() {
    this.contentItemsService.getContentItems();
    this.form = new FormGroup({
      name_content: new FormControl('', [
        Validators.pattern('[а-яА-ЯёЁ0-9 \\-]+$'),
        Validators.required
      ]),
      full_name_owner: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      phone_content_items: new FormControl('', [
        Validators.pattern('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'),
        Validators.required
      ]),
      payment: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ0-9 ]+$'),
        Validators.required
      ]),
    });
  }

  addData() {
    if (this.form.valid) {
      const body = {
        name_content: this.form.value.name_content,
        full_name_owner: this.form.value.full_name_owner,
        phone_content_items: this.form.value.phone_content_items,
        payment: this.form.value.payment
      }
      this.contentItemsService.addContentItems(body);
      this.contentItemsService.closeModalAddContentItems();
      this.contentItemsService.getContentItems();
    }
  }

}
