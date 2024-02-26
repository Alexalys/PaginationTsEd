import { QueryParams } from "@tsed/platform-params";
import { Get, Returns } from "@tsed/schema";
import { Controller } from "@tsed/di";
import { Pageable } from "../../models/Pageable";
import { Pagination } from "../../models/Pagination";
import { Product } from "../../models/Product";

@Controller("/pageable")
export class ProductsCtrl {
  @Get("/")
  @Returns(206, Pagination).Of(Product).Title("PaginatedProduct")
  @Returns(200, Pagination).Of(Product).Title("PaginatedProduct")
  async get(@QueryParams() pageableOptions: Pageable) {
    return new Pagination<Product>({
      data: [
        new Product({
          id: "100",
          title: "CANON D3000"
        }),
        new Product({
          id: "2",
          title: "Sony D3000"
        }),
        new Product({
          id: "1",
          title: "Toshiba D3000"
        }),
        new Product({
          id: "3",
          title: "Fuji D3000"
        })
      ],
      pageable: pageableOptions
    });
  }
}
