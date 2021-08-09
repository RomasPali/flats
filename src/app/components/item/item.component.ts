import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flat } from 'src/app/files/flat.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input('name') flat: Flat;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goOnEdit(id: any){
    this.router.navigate(['list', id]);
  }

}
