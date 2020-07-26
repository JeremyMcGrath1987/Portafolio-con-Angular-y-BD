import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
    this.title = 'Jeremías Cañadas';
    this.subtitle = 'Desarrollador Web y Programador Software';
    this.email = 'imerej_@hotmail.com';

  }

  ngOnInit(): void {
   

  }

}
