import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flat } from 'src/app/files/flat.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  flat: Flat = {} as Flat;

  registerForm = new FormGroup({
    formAddress: new FormControl(),
    formFloor: new FormControl(),
    formRooms: new FormControl(),
    formArea: new FormControl(),
    formPrice: new FormControl(),
    formDescription: new FormControl()
  });
  
  constructor(private restServ: RestService, private router: Router) { }

  ngOnInit() {
    this.registerForm.get('formAddress').setValidators([Validators.required]);
    this.registerForm.get('formFloor').setValidators([Validators.required, Validators.maxLength(2), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
    this.registerForm.get('formRooms').setValidators([Validators.required, Validators.maxLength(2), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
    this.registerForm.get('formArea').setValidators([Validators.required, Validators.maxLength(6), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
    this.registerForm.get('formPrice').setValidators([Validators.required, Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
    this.registerForm.get('formDescription').setValidators([Validators.required, Validators.maxLength(20)]);
  }
  save(){
    this.restServ.create(this.flat).subscribe(
      response => this.router.navigate(['main'])
    );
    
  }

}
