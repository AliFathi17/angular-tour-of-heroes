import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  title = 'List of courses';
  courses = ['Course1', 'Course2', 'Course3'];

  constructor() { }

  ngOnInit(): void {
  }

}
