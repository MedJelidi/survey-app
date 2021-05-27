import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Question} from '../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // @ts-ignore
  @Input() question: Question;
  @Input() pageNumber = 0;
  @Output() selectedAnswer = new EventEmitter();
  @Output() nextPage = new EventEmitter();
  textValue = '';
  @ViewChild('myCheckbox') myCheckbox: any;
  checkedOptions = [];
  constructor() { }

  ngOnInit(): void {
    // console.log(this.question.type);
  }

  next(value: any): void {
    this.selectedAnswer.emit(value);
    this.nextPage.emit(this.pageNumber + 1);
  }

  selectedOption(value: any): void {
    this.selectedAnswer.emit(value.target.name);
    this.nextPage.emit(this.pageNumber +
      (value.target.id === '0' ? (+this.question.yes) : value.target.id === '1' ? (+this.question.no) : 1));
    console.log('target.name: ' + value.target.name);
    console.log('target.id: ' + value.target.id);
    console.log('weird: ' + (value.target.id === '0' ? (+this.question.yes) : value.target.id === '1' ? (+this.question.no) : 1));
  }

  checkType(type: string): boolean {
    return this.question.type === type;
  }

  addOption($event: Event): void {
    // @ts-ignore
    const value = $event.target.id;
    // @ts-ignore
    const index = this.checkedOptions.indexOf(value);
    if (index > -1) {
      this.checkedOptions.splice(index, 1);
    } else {
      // @ts-ignore
      this.checkedOptions.push(value);
    }
  }
}
