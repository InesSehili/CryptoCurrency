import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cryptochecker';
  selectedcurency: string = "INR";

  sendCurrency(event: string) {
    console.log(event)
  }
}
