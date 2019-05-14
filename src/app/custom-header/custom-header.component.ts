import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {
  @Input() defaultHref: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {}

}
