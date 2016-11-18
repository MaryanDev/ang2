import { Component } from '@angular/core';

export class Person {
    public Id: number;
    public Name: string;
    public Phone: string;

    constructor(name: string, phone: string) {
        this.Name = name;
        this.Phone = phone;
        this.Id = (Math.random() * 100);
    }
}
@Component({
    selector: 'persons',
    templateUrl: '/templates/simpleTable.html',
    styles: [`h1 { color: red; }`]
})
export class AppComponent {
    public Persons: Person[] = [
        new Person("Maryan", "9580654-65"),
        new Person("Petro", "503460586-65"),
        new Person("Ivan", "255786583-65"),
        new Person("Paul", "5769879-65")
    ];

    public name: string = "Fuck";
    public title: string = "Product";
    public price: number = 10;

    addPerson(name: string, phone: string): void {
        if (name == "" || name == undefined || phone == "" || phone == undefined) {
            return
        }
        else {
            this.Persons.push(new Person(name, phone));
        }
    }

    onNameChanged(name: string) {
        this.name = name;
    }
}
