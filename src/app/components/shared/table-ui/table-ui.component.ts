import {Component, ContentChild, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.css']
})
export class TableUiComponent implements OnInit {
  @Input() public data: any;
  constructor() { }

  ngOnInit() {
  }

  @ContentChild('tr', {static: true}) public tr: any;

  @ContentChild('th', {static: true}) public th: any;

}
