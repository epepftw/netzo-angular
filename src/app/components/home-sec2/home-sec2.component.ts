import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-sec2',
  templateUrl: './home-sec2.component.html',
  styleUrls: ['./home-sec2.component.scss']
})
export class HomeSec2Component implements OnInit {

  why_us: any = [
    {
      logo: "fa-solid fa-image",
      title: "Unique Digital Art",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      logo: "fa-solid fa-users",
      title: "Solid Community",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      logo: "fa-solid fa-headset",
      title: "Support Author",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
