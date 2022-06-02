import { Component, OnInit } from '@angular/core';
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
        Validators.required
      ]),
      phone: new FormControl(this.ownersAnimalsService.arrayForEdit.phone, [
        Validators.required
      ]),
      adress: new FormControl(this.ownersAnimalsService.arrayForEdit.adress, [
        Validators.required
      ]),
      nickname_animals: new FormControl(this.ownersAnimalsService.arrayForEdit.nickname_animals, [
        Validators.required
      ]),
      gender_animals: new FormControl(this.ownersAnimalsService.arrayForEdit.gender_animals, [
        Validators.required
      ]),
      date_handed_over_to_owner: new FormControl(this.ownersAnimalsService.arrayForEdit.date_handed_over_to_owner, [
        Validators.required
      ]),
      return_date_reason: new FormControl(this.ownersAnimalsService.arrayForEdit.return_date_reason, [
        Validators.required
      ]),
    });
  }

  editData() {
    if (this.form.valid) {
      const body = {
        id: this.ownersAnimalsService.arrayForEdit.id,
        full_name: this.form.value.full_name,
        phone: this.form.value.phone,
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
