export type Car = Omit<CarData, "_links">;

export type CarData = {
    brand: string;
    model: string;
    color: string;
    fuel: string;
    modelYear: string;
    price: string;
    _links: {
        self: {
            href: string;
        },
        car: {
            href: string;
        }
    }
    
}