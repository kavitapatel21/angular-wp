import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(frmbuilder: FormBuilder, private auth: AuthService) {
    this.registerForm = frmbuilder.group({
      runame: [null, [Validators.required]],
      remail: [null, [Validators.required, Validators.email]],
      rpassword: [null, Validators.required],
    });
  }
  PostData(registerForm: any) {
    console.log(this.registerForm.getRawValue());
    const data = this.registerForm.value;
    delete data['confirm']
    this.auth.signup(data).subscribe(res => {
      console.log(res);
      alert("user register succcessfully");
      this.registerForm.reset();
    },
      error => {
        alert('Error');
      })
  }
}
