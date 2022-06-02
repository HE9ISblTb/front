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
        Validators.required
      ]),
      animal_species: new FormControl(this.animalsService.arrayForEdit.animal_species, [
        Validators.required
      ]),
      gender_animals: new FormControl(this.animalsService.arrayForEdit.gender_animals, [
        Validators.required
      ]),
      photo_video: new FormControl(this.animalsService.arrayForEdit.photo_video, [
        Validators.required
      ]),
      responsible_person: new FormControl(this.animalsService.arrayForEdit.responsible_person, [
        Validators.required
      ]),
      date_of_birth: new FormControl(this.animalsService.arrayForEdit.date_of_birth, [
        Validators.required
      ]),
      vaccination: new FormControl(this.animalsService.arrayForEdit.vaccination, [
        Validators.required
      ]),
      deworming: new FormControl(this.animalsService.arrayForEdit.deworming, [
        Validators.required
      ]),
      sterilization_castration: new FormControl(this.animalsService.arrayForEdit.sterilization_castration, [
        Validators.required
      ]),
      treatment: new FormControl(this.animalsService.arrayForEdit.treatment, [
        Validators.required
      ]),
      content_item: new FormControl(this.animalsService.arrayForEdit.content_item, [
        Validators.required
      ]),
      balance: new FormControl(this.animalsService.arrayForEdit.balance, [
        Validators.required
      ]),
      documents: new FormControl(this.animalsService.arrayForEdit.documents, [
        Validators.required
      ]),
      owner_animals: new FormControl(this.animalsService.arrayForEdit.owner_animals, [
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
      this.animalsService.editAnimals(body);
      this.animalsService.closeModalEditAnimals();
      this.animalsService.getAnimals();
    }
  }

}
