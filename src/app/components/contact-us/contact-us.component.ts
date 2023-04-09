import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  openTwitter(){
    window.open("https://twitter.com/ByTheTechne")
  }

  openEmail(){
    window.open('mailto:powerbyosh@gmail.com?subject=Query Regarding Techne&body=Hi There, I would like to know about the programs offered.');
  }

  openLinkdn(){
    window.open("https://www.linkedin.com/in/p-yoshitha-reddy-434575128/")
  }

}
