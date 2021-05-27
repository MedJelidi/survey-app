export class Question {
  constructor(public question: string,
              public type: string,
              public choices: string[],
              public yes: string,
              public no: string
              ) {
  }
}
