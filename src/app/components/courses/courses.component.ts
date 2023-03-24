import { Component } from '@angular/core';
import { courses } from 'src/assets/files/courses';
import {MatDialog} from '@angular/material/dialog';
import { AboutPowerBiComponent } from '../about-power-bi/about-power-bi.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  allCourses = courses;

  constructor(public dialog: MatDialog){
    this.allCourses.forEach(ele =>{
      ele.imageURL = `../../../assets/logos/${ele.imageURL}`
    })
  }

  openCourse(course:string){
    if(course == "Power BI"){
      const dialogRef = this.dialog.open(AboutPowerBiComponent);
    }
  }

}
