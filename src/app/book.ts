export class Book {
    favorite = false;
    notableItems: Book[];

    constructor(public bookTitle: string,
        public id: string,
        public price: number,
        public exchange: any,
        public previousPrice: number) {
        this.notableItems = [];
    }
    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }
}

export class Person {
    title!: string;
    name!: string;
}

