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
        Validators.required
      ]),
      animal_species: new FormControl('', [
        Validators.required
      ]),
      gender_animals: new FormControl('', [
        Validators.required
      ]),
      photo_video: new FormControl('', [
        Validators.required
      ]),
      responsible_person: new FormControl('', [
        Validators.required
      ]),
      date_of_birth: new FormControl('', [
        Validators.required
      ]),
      vaccination: new FormControl('', [
        Validators.required
      ]),
      deworming: new FormControl('', [
        Validators.required
      ]),
      sterilization_castration: new FormControl('', [
        Validators.required
      ]),
      treatment: new FormControl('', [
        Validators.required
      ]),
      content_item: new FormControl('', [
        Validators.required
      ]),
      balance: new FormControl('', [
        Validators.required
      ]),
      documents: new FormControl('', [
        Validators.required
      ]),
      owner_animals: new FormControl('', [
        Validators.required
      ]),
    });
  }

  collectData() {
    if (this.form.valid) {
      const body = {
        nickname_animals: this.form.value.nickname_animals,
        animal_species: this.form.value.animal_species,
        gender_animals: this.form.value.gender_animals,
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
  }

}
