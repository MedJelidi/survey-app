import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>('http://localhost:3000/questions');
  }
}
