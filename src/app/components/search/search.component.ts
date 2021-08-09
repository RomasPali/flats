import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchDTO } from 'src/app/files/SearchDTO.model';
import { RestService } from 'src/app/services/rest.service';
import { Output, EventEmitter } from '@angular/core';
import { Flat } from 'src/app/files/flat.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchDto: SearchDTO = {} as SearchDTO;

  @Output() flats = new EventEmitter<Flat[]>();

  registerForm = new FormGroup({
    formPriceFrom: new FormControl(),
    formPriceTo: new FormControl(),
    formFloorFrom: new FormControl(),
    formFloorTo: new FormControl(),
  });

  constructor(private router: Router, private restSrv: RestService) { }

  ngOnInit() {
  this.registerForm.get('formPriceFrom').setValidators([Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(8)]);
  this.registerForm.get('formPriceTo').setValidators([Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(8)]);
  this.registerForm.get('formFloorFrom').setValidators([Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(2)]);
  this.registerForm.get('formFloorTo').setValidators([Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(2)]);
  }
  goOnCreate(){
    this.router.navigate(['create']);
  }
  search(){
    this.restSrv.search(this.searchDto).subscribe(
      response => {
        this.flats.emit(response);
      },
      error => {
      }
    );
  }

}
