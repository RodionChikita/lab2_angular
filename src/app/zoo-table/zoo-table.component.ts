import { Component } from '@angular/core';

@Component({
  selector: 'app-zoo-table',
  templateUrl: './zoo-table.component.html',
  styleUrls: ['./zoo-table.component.scss']
})
export class ZooTableComponent {
  zooData: any[] = [];

  zooOptions: any = {
    mode: 'popup',
    allowUpdating: true,
    allowAdding: true,
    allowDeleting: true,
    useIcons: true
  };

  constructor() {

  }
}
