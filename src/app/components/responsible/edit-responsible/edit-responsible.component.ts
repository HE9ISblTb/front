import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ResponsibleService} from "../../../services/responsible/responsible-service";

@Component({
  selector: 'app-edit-responsible',
  templateUrl: './edit-responsible.component.html',
  styleUrls: ['./edit-responsible.component.css']
})
export class EditResponsibleComponent implements OnInit {

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  constructor(public responsibleService: ResponsibleService) {
  }

  ngOnInit() {
    this.responsibleService.getResponsible();
    this.form = new FormGroup({
      full_name: new FormControl(this.responsibleService.arrayForEdit.full_name, [
        Validators.required
      ]),
      phone: new FormControl(this.responsibleService.arrayForEdit.phone, [
        Validators.required
      ]),
      vkontakte_link: new FormControl(this.responsibleService.arrayForEdit.vkontakte_link, [
        Validators.required
      ]),

    });
  }

  editData() {
    if (this.form.valid) {
      const body = {
        id: this.responsibleService.arrayForEdit.id,
        full_name: this.form.value.full_name,
        phone: this.form.value.phone,
        vkontakte_link: this.form.value.vkontakte_link
      }
      this.responsibleService.editResponsible(body);
      this.responsibleService.closeModalEditResponsible();
      this.responsibleService.getResponsible();
    }
  }

}
