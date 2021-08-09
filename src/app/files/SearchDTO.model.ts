export class SearchDTO{
    constructor(
        public id: number,
        public address: string,
        public floor: number,
        public rooms: number,
        public area: number,
        public price: number,
        public description: string,
        public priceFrom: number,
        public priceTo: number,
        public floorsFrom: number,
        public floorsTo: number
    ){}
}