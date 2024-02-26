import { Default, Description, Integer, Min } from "@tsed/schema";

export class Pageable {
  @Integer()
  @Min(0)
  @Default(0)
  @Description("Page number.")
  offset: number = 0;

  @Integer()
  @Min(1)
  @Default(20)
  @Description("Number of objects per page.")
  limit: number = 20;

  constructor(options: Partial<Pageable>) {
    options.offset && (this.offset = options.offset);
    options.limit && (this.limit = options.limit);
  }

  // get offset() {
  //   return this.page ? this.page * this.limit : 0;
  // }

  // get limit() {
  //   return this.size;
  // }
}
