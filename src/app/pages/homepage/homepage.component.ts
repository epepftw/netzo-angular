import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  card_data_sample: any = [
		{
			digit: '10k',
			description: "Unique Asset"
		},
		{
			digit: '7k+',
			description: "Owner Asset"
		},
		{
			digit: '1.21+',
			description: "Floor price(ether)"
		},
    {
			digit: '49k+',
			description: "Volume trade(ether)"
		}
	];

  constructor() { }

  ngOnInit(): void {
  }

}
