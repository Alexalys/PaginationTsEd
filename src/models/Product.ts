import { Property } from "@tsed/schema";

export class Product {
  @Property()
  id: string;

  @Property()
  title: string;

  constructor({ id, title }: Partial<Product> = {}) {
    id && (this.id = id);
    title && (this.title = title);
  }
}
