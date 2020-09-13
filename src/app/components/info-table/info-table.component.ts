import { Component, Input , OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnChanges {
  @Input('dataSource') dataSource;
  @Output() deletefromlist = new EventEmitter();
  displayedColumns = ['id', 'name', 'rate', 'quality', 'action'];

  ngOnChanges() {
  }
  deleteProduct = (product) => {
    this.deletefromlist.emit(product);
  }
}
