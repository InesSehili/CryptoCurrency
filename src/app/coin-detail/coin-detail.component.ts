import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {
  coinData : any;
  coinId !: string;
  days : number = 30;
  currency : string = "INR";
  constructor(private api : ApiService,private activatedRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.coinId = val['id'];
    });
  }
  getDetailById()
}
