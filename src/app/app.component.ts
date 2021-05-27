import {Component, OnInit} from '@angular/core';
import {QuestionService} from './services/question.service';
import {Question} from './models/question.model';
import {ResponseService} from './services/response.service';
import {Response} from './models/response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'survey-app';
  name = '';
  age = '';
  showSurvey = false;
  questions: Question[] = [];
  p = 1;
  answers = new Map<string, string>();
  theEnd = false;
  loading = true;

  constructor(private questionService: QuestionService,
              private responseService: ResponseService) {
  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((questions) => {
      console.log(questions);
      this.questions = questions;
      this.loading = false;
    });
  }

  addAnswer(value: any, index: number): void {
    this.answers.set(this.questions[index].question, value);
    console.log(this.answers);
  }

  startSurvey(): void {
    this.showSurvey = true;
    this.answers.set('Nom', this.name);
    this.answers.set('Age', this.age);
  }

  goToNext($event: any): void {
    console.log('p: ' + this.p);
    console.log('page to go: ' + $event);
    if (this.p === $event || $event > 10) {
      this.theEnd = true;
      this.showSurvey = false;
      const jsonObject: any = {};
      this.answers.forEach((value, key) => {
        jsonObject[key] = value;
      });
      const response = new Response(JSON.stringify(jsonObject));
      this.responseService.postResponse(response).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.p = $event;
    }
  }

  uncheckedNameAge(): boolean {
    return this.name.length === 0 || (this.age.length === 0) || isNaN(Number(this.age.toString())) || (+this.age < 18 || +this.age > 100);
  }
}
