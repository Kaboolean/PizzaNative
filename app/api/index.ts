import { AxiosInstance } from 'axios';
import createHttpClient from './http';
import PizzaResource from './resources/pizza';

export default class ApiType {
  private instance: AxiosInstance;

  public pizzas: PizzaResource;

  constructor() {
    this.instance = createHttpClient();
    this.pizzas = new PizzaResource(this.instance);
  }
}
