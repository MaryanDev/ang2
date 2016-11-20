export class QuizInfo {
    Id: number;
    Title: string;
    Duration: number;

    constructor(id: number, title: string, duration: number) {
        this.Id = id;
        this.Title = title;
        this.Duration = duration;
    }
}