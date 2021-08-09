import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flat } from 'src/app/files/flat.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  id: number;
  flat: Flat = {} as Flat;

  registerForm = new FormGroup({
    formAddress: new FormControl(),
    formFloor: new FormControl(),
    formRooms: new FormControl(),
    formArea: new FormControl(),
    formPrice: new FormControl(),
    formDescription: new FormControl()
  });
  
  constructor(private activatedRouter: ActivatedRoute,
    private servRest: RestService, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.servRest.findById(this.id).subscribe(
      response => this.flat = response
    );
    this.registerForm.get('formAddress').setValidators([Validators.required]);
    this.registerForm.get('formFloor').setValidators([Validators.required, Validators.maxLength(2), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
    this.registerForm.get('formRooms').setValidators([Validators.required, Validators.maxLength(2), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
    this.registerForm.get('formArea').setValidators([Validators.required, Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
    this.registerForm.get('formPrice').setValidators([Validators.required, Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
    this.registerForm.get('formDescription').setValidators([Validators.required, Validators.maxLength(15)]);
  }

  goOnMAin() {
    this.router.navigate(['main']);
  }

  delete(){
  this.servRest.deleteById(this.id).subscribe(
    respone => this.router.navigate(['main'])
  );  
  }
  save(){
    this.servRest.update(this.id, this.flat).subscribe(
      response => this.router.navigate(['main'])
    );
  }

}
