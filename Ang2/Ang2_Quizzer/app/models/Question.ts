import { Variant } from './Variant';

export class Question {
    Id: number;
    Text: string;
    Variants: Variant[];
    UsersChoice: number;
}