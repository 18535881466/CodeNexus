import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  public members = [
    {
      name: "Ashwanth Ram R.",
      info: "Engineering Graduate at Mepco Schlenk Engineering College Sivakasi 2024",
      img: "../../../assets/images/Ash Photo(1).jpg",
    },
    {
      name: "Siva Kumar N.",
      info: "Engineering Graduate at Mepco Schlenk Engineering College Sivakasi 2024",
      img: "../../../assets/images/Siva.png",
    }
  ];

  ngOnInit(): void {
  }

}
