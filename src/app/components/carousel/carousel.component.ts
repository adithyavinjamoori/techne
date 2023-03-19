import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  items = [
    {
      image: 'https://placeimg.com/640/480/animals',
      caption: 'Animal 1'
    },
    {
      image: 'https://placeimg.com/640/480/nature',
      caption: 'Nature 1'
    },
    {
      image: 'https://placeimg.com/640/480/people',
      caption: 'People 1'
    },
    {
      image: 'https://placeimg.com/640/480/tech',
      caption: 'Tech 1'
    },
  ];

  slidePosition = '0px';

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.slidePosition = '-' + (parseInt(this.slidePosition) + 100) + '%';
  }

  prevSlide() {
    this.slidePosition = '-' + (parseInt(this.slidePosition) - 100) + '%';
  }

}
