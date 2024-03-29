import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResponsibleService} from "../../../services/responsible/responsible-service";

@Component({
  selector: 'app-add-responsible',
  templateUrl: './add-responsible.component.html',
  styleUrls: ['./add-responsible.component.css']
})
export class AddResponsibleComponent implements OnInit {

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  constructor(
    public responsibleService: ResponsibleService) {
  }

  ngOnInit() {
    this.responsibleService.getResponsible()
    this.form = new FormGroup({
      full_name_responsible: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      phone_responsible: new FormControl('', [
        Validators.pattern('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'),
        Validators.required
      ]),
      vkontakte_link: new FormControl('', [
        Validators.required
      ])
    });
  }

  addData() {
    if (this.form.valid) {
      const body = {
        full_name_responsible: this.form.value.full_name_responsible,
        phone_responsible: this.form.value.phone_responsible,
        vkontakte_link: this.form.value.vkontakte_link
      }
      this.responsibleService.addResponsible(body);
      this.responsibleService.closeModalAddResponsible();
      this.responsibleService.getResponsible();
    }
  }

}
