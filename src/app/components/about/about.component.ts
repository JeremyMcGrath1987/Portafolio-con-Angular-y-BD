import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
