import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { IsLogin }   from '../../services/login';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [PokemonComponent, ReactiveFormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  isLoggedIn: boolean = false;
  login = new IsLogin;
  formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'pass': new FormControl('', Validators.required)
  });
  onSubmit(){
    console.log('name: ', this.formUser.value.name, ' - ', this.formUser.value.pass)
    if(this.formUser.value.name && this.formUser.value.pass ){
      this.isLoggedIn = this.login.isLoggedIn(this.formUser.value.name, this.formUser.value.pass)
    }
  }
}
