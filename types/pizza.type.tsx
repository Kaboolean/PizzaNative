export type PizzaProps = {
    pizza: Pizza
}

export type Pizza = {
    id: number,
    name: string,
    description: string,
    price: string,
    image_url: string,
}

export type PostPizza = {
    name: string,
    description: string,
    price: string,
}

export type PutPizza = {
    name: string,
    description: string,
    price: string,
}