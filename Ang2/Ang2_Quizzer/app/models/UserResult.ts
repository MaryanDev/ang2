import { Question } from './Question';

export class UserResult {
    public QuizId: number;
    Questions: Question[];

    //setChoice(questId: number, choice: number) {
    //    this.Questions[questId].UsersChoice = choice;
    //}
}