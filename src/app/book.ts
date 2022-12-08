export class Book {
    favorite = false;
    notableItems: Book[];

    constructor(public bookTitle: string,
        public id: string,
        public price: number,
        public previousPrice: number) {
        this.notableItems = [];
        }

        isPositiveChange(): boolean {
            return this.price >= this.previousPrice;
        }
    }

export class Person { 
    name!: string;
    title!: string;
}