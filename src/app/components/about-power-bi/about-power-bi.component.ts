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

  connectWithUsPowerBI(){
    window.open("https://twitter.com/ByTheTechne")
  }

  connectWithUsPowerBIEmail(){
    window.open('mailto:powerbyosh@gmail.com?subject=Query Regarding Techne&body=Hi There,\n I would like to know about the Power BI sessions');

  }
}

