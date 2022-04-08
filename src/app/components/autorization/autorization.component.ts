import {Component, OnInit} from '@angular/core';
import {AutorizationService} from "../../services/autorization/autorization-service";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css']
})
export class AutorizationComponent implements OnInit {

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  constructor(public administrationService: AutorizationService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.pattern('^[a-zA-Z0-9]+$'),
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.pattern('^[a-zA-Z0-9]+$'),
        Validators.required
      ]),
    });
  }

  autorization() {
    if (this.form.valid) {
      console.log(this.form.value.login, this.form.value.password)
    }
  }


}
