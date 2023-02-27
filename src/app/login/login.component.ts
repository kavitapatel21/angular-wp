import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(frmbuilder: FormBuilder ,private auth: AuthService) {
    this.loginForm = frmbuilder.group({
      luname: [null, [Validators.required]],
      lpassword: [null, Validators.required],
    });
  }
  PostData(loginForm: any) {
    //console.log(this.loginForm.getRawValue());
    const data = this.loginForm.value;
    this.auth.signin(data).subscribe(res => {
      //console.log(res);
      const user = res.find((a:any)=>{
        console.log(a);
        return a.name === this.loginForm.value.luname 
      });
      if(user){
        alert('Login Succesful');
        this.loginForm.reset();
      }else{
        alert("user not found");
      }
      this.loginForm.reset();
    },
      error => {
        alert('Error');
      })
  }
}
