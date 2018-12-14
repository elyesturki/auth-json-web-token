import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import  {GetJsonService} from "./services/get-json.service";

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-json-web-token';

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private getJsonServ : GetJsonService , private route : Router) {
    this.myForm = this.fb.group( {
      email: ['', Validators.required],
      password: ''
    });
}

  onSubmit(event, email,password) {
    console.log(email,password, event);
   /* this.getJsonServ.getJson(email, password).subscribe(() => {
      this.router.navigate(['http://localhost:3000/hotels']);
    });*/
  }

}
