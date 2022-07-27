import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AnimalsService} from "../../../services/animals/animals-service";

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.css']
})
export class AddAnimalsComponent implements OnInit {

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  constructor(
    public animalsService: AnimalsService) {
  }

  ngOnInit() {
    this.animalsService.getAnimals();
    this.form = new FormGroup({
      nickname_animals: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      animal_species: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      gender_animal: new FormControl('', [
        Validators.pattern('^[мж]'),
        Validators.required
      ]),
      photo_video: new FormControl('', [
        Validators.required
      ]),
      responsible_person: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      date_of_birth: new FormControl('', [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9]$'),
        Validators.required
      ]),
      vaccination: new FormControl('', [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      deworming: new FormControl('', [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      sterilization_castration: new FormControl('', [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      treatment: new FormControl('', [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      content_item: new FormControl('', [
        Validators.pattern('[а-яА-ЯёЁ0-9 \\-]+$'),
        Validators.required
      ]),
      balance: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ0-9 ]+$'),
        Validators.required
      ]),
      documents: new FormControl('', [
        Validators.required
      ]),
      owner_animals: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
    });
  }

  addData() {
    if (this.form.valid) {
      const body = {
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
      this.animalsService.addAnimals(body);
    }
    this.animalsService.getAnimals();
    this.animalsService.closeModalAddAnimals();
  }

}
