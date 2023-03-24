import { Component } from '@angular/core';

@Component({
  selector: 'app-about-power-bi',
  templateUrl: './about-power-bi.component.html',
  styleUrls: ['./about-power-bi.component.scss']
})
export class AboutPowerBiComponent {


  columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element:any) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: any) => `${element.name}`,
    }
  ]
}

