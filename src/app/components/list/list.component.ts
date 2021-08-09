import { Component, Input, OnInit } from '@angular/core';
import { Flat } from 'src/app/files/flat.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() flats: Flat[] = [];
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.findAll().subscribe(
      response => this.flats = response
    );
  }

}
