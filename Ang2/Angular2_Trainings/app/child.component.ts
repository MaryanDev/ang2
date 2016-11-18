import { Input, Output, EventEmitter, Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: '<p>Title is {{title}}</p><p>Price is {{price}}</p><input [(ngModel)]="name" (ngModelChange)="nameChange(name)"> '
})
export class ChildComponent {
    name: string = "Maryan";
    @Input() title: string;
    _price: number;

    @Input() 
    set price(price: number) {
        if (price < 0 || price > 1000) {
            this._price = 0;
        }
        else {
            this._price = price;
        }
    }

    get price() {
        return this._price;
    }
    logAction(name: string) {
        console.log("changed in child component " + name);
    }
    //@Output() onNameChanged = new EventEmitter<string>();
    //nameChange(name: string) {
    //    this.onNameChanged.emit(name);
    //}
}