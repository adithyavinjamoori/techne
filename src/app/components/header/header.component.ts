import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  openContactUs(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSd_7Nd0Qrrzb0ypob7zNrjEa1v8A8wg-aadxLaPbwmlGaW4gg/viewform")
  }
}
