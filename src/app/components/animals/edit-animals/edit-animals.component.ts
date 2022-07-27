import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AnimalsService} from "../../../services/animals/animals-service";

@Component({
  selector: 'app-edit-animals',
  templateUrl: './edit-animals.component.html',
  styleUrls: ['./edit-animals.component.css']
})

export class EditAnimalsComponent implements OnInit {

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  constructor(
    public animalsService: AnimalsService) {
  }

  ngOnInit() {
    this.animalsService.getAnimals();
    this.form = new FormGroup({
      nickname_animals: new FormControl(this.animalsService.arrayForEdit.nickname_animals, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      animal_species: new FormControl(this.animalsService.arrayForEdit.animal_species, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      gender_animal: new FormControl(this.animalsService.arrayForEdit.gender_animal, [
        Validators.pattern('^[мж]'),
        Validators.required
      ]),
      photo_video: new FormControl(this.animalsService.arrayForEdit.photo_video, [
        Validators.required
      ]),
      responsible_person: new FormControl(this.animalsService.arrayForEdit.responsible_person, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      date_of_birth: new FormControl(this.animalsService.arrayForEdit.date_of_birth, [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9]$'),
        Validators.required
      ]),
      vaccination: new FormControl(this.animalsService.arrayForEdit.vaccination, [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      deworming: new FormControl(this.animalsService.arrayForEdit.deworming, [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      sterilization_castration: new FormControl(this.animalsService.arrayForEdit.sterilization_castration, [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      treatment: new FormControl(this.animalsService.arrayForEdit.treatment, [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      content_item: new FormControl(this.animalsService.arrayForEdit.content_item, [
        Validators.pattern('[а-яА-ЯёЁ0-9 \\-]+$'),
        Validators.required
      ]),
      balance: new FormControl(this.animalsService.arrayForEdit.balance, [
        Validators.pattern('^[а-яА-ЯёЁ0-9 ]+$'),
        Validators.required
      ]),
      documents: new FormControl(this.animalsService.arrayForEdit.documents, [
        Validators.required
      ]),
      owner_animals: new FormControl(this.animalsService.arrayForEdit.owner_animals, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
    });
  }

  editData() {
    if (this.form.valid) {
      const body = {
        id: this.animalsService.arrayForEdit.id,
        nickname_animals: this.form.value.nickname_animals,
        animal_species: this.form.value.animal_species,
        gender_animal: this.form.value.gender_animal,
        photo_video: this.form.value.photo_video,
        responsible_person: this.form.value.responsible_person,
        date_of_birth: this.form.value.date_of_birth,
        vaccination: this.form.value.vaccination,
        deworming: this.form.value.deworming,
        sterilization_castration: this.form.value.sterilization_castration,
        treatment: this.form.value.treatment,
        content_item: this.form.value.content_item,
        balance: this.form.value.balance,
        documents: this.form.value.documents,
        owner_animals: this.form.value.owner_animals,
      }
      this.animalsService.editAnimals(body);
      this.animalsService.closeModalEditAnimals();
      this.animalsService.getAnimals();
    }
  }

}
