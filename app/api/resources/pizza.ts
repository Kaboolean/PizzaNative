import { AxiosInstance } from "axios";
import { Pizza, PostPizza, PutPizza } from "../models/pizza";

const resource = `pizzas`;

export default class PizzaResource {
    private axios: AxiosInstance

    public constructor(axiosInstance: AxiosInstance){
        this.axios = axiosInstance
    }

    public async getPizzas() {
        const response = await this.axios.get(`${resource}`)
        return response.data
    }

    public async getById(id: number) : Promise<Pizza> {
        const response = await this.axios.get(`${resource}/${id}`)
        return response.data
    }

    public async create(pizza: PostPizza) : Promise<Pizza> {
        const response = await this.axios.post(`${resource}`,pizza)
        return response.data
    }

    public async updatePizza(id: number, pizza: PutPizza) : Promise<Pizza> {
        const response = await this.axios.put(`${resource}/${id}`, pizza)
        return response.data
    }
    
    public async deleteById(id : number) {
        const response = await this.axios.delete(`${resource}/${id}`)
        return response.data
    }
}