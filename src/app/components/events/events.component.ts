import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  register(){
    window.open('mailto:powerbyosh@gmail.com?subject=Query Regarding Techne&body=Hi There, I would like to register for the power BI workshop.');
  }
}
