import { Component } from '@angular/core';
import { courses } from 'src/assets/files/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  allCourses = courses;

  constructor(){
    this.allCourses.forEach(ele =>{
      ele.imageURL = `../../../assets/logos/${ele.imageURL}`
    })
  }
}
