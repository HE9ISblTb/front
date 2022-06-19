import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OwnersAnimalsService} from "../../../services/owners-animals/owners-animals-service";

@Component({
  selector: 'app-edit-owners-animals',
  templateUrl: './edit-owners-animals.component.html',
  styleUrls: ['./edit-owners-animals.component.css']
})

export class EditOwnersAnimalsComponent implements OnInit {

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  constructor(public ownersAnimalsService: OwnersAnimalsService) {
  }

  ngOnInit() {
    this.ownersAnimalsService.getOwnersAnimals();
    this.form = new FormGroup({
      full_name: new FormControl(this.ownersAnimalsService.arrayForEdit.full_name, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      phone_owners: new FormControl(this.ownersAnimalsService.arrayForEdit.phone_owners, [
        Validators.pattern('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'),
        Validators.required
      ]),
      adress: new FormControl(this.ownersAnimalsService.arrayForEdit.adress, [
        Validators.pattern('[а-яА-ЯёЁ0-9\\.\\,\\- ]+$'),
        Validators.required
      ]),
      nickname_animals: new FormControl(this.ownersAnimalsService.arrayForEdit.nickname_animals, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      gender_animals: new FormControl(this.ownersAnimalsService.arrayForEdit.gender_animals, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      date_handed_over_to_owner: new FormControl(this.ownersAnimalsService.arrayForEdit.date_handed_over_to_owner, [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9]$'),
        Validators.required
      ]),
      return_date_reason: new FormControl(this.ownersAnimalsService.arrayForEdit.return_date_reason, [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ\\, ]+$'),
        Validators.required
      ]),
    });
  }

  editData() {
    if (this.form.valid) {
      const body = {
        id: this.ownersAnimalsService.arrayForEdit.id,
        full_name: this.form.value.full_name,
        phone_owners: this.form.value.phone_owners,
        adress: this.form.value.adress,
        nickname_animals: this.form.value.nickname_animals,
        gender_animals: this.form.value.gender_animals,
        date_handed_over_to_owner: this.form.value.date_handed_over_to_owner,
        return_date_reason: this.form.value.return_date_reason
      }
      this.ownersAnimalsService.editOwnersAnimals(body);
      this.ownersAnimalsService.closeModalEditAnimals();
      this.ownersAnimalsService.getOwnersAnimals();
    }
  }

}
