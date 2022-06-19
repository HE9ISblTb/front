import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OwnersAnimalsService} from "../../../services/owners-animals/owners-animals-service";

@Component({
  selector: 'app-add-owners-animals',
  templateUrl: './add-owners-animals.component.html',
  styleUrls: ['./add-owners-animals.component.css']
})
export class AddOwnersAnimalsComponent implements OnInit {

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  constructor(public ownersAnimalsService: OwnersAnimalsService) {
  }

  ngOnInit() {
    this.ownersAnimalsService.getOwnersAnimals();
    this.form = new FormGroup({
      full_name: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      phone_owners: new FormControl('', [
        Validators.pattern('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'),
        Validators.required
      ]),
      adress: new FormControl('', [
        Validators.pattern('[а-яА-ЯёЁ0-9\\.\\,\\- ]+$'),
        Validators.required
      ]),
      nickname_animals: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      gender_animals: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      date_handed_over_to_owner: new FormControl('', [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9]$'),
        Validators.required
      ]),
      return_date_reason: new FormControl('', [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
    });
  }

  addData() {
    if (this.form.valid) {
      const body = {
        full_name: this.form.value.full_name,
        phone_owners: this.form.value.phone_owners,
        adress: this.form.value.adress,
        nickname_animals: this.form.value.nickname_animals,
        gender_animals: this.form.value.gender_animals,
        date_handed_over_to_owner: this.form.value.date_handed_over_to_owner,
        return_date_reason: this.form.value.return_date_reason
      }
      this.ownersAnimalsService.addOwnersAnimals(body);
      this.ownersAnimalsService.closeModalAddOwnersAnimals();
      this.ownersAnimalsService.getOwnersAnimals();
    }
  }

}
