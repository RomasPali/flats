import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/files/flat.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  flats: Flat[];

  constructor() { }

  ngOnInit() {
  }

  onListSearched(flats: Flat[]):void {
    this.flats = flats;
  }

}
