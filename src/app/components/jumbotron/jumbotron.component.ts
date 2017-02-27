import { Component } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent  {

  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor() {
    this.jbtHeading = "";
    this.jbtText = "We are two brothers who share passion for all web and digital. We love what we do, we care about getting it right, and we get great results for our clients. We are happy and friendly people, people that you want to work with.";
    this.jbtBtnText = "Read More";
    this.jbtBtnUrl = "/about";
  }

}
