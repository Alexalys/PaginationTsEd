import { PlatformContext } from "@tsed/common";
import { ResponseFilter, ResponseFilterMethods } from "@tsed/platform-response-filter";
import { Pagination } from "../models/Pagination";

@ResponseFilter("application/json")
export class PaginationFilter implements ResponseFilterMethods {
  transform(data: any, ctx: PlatformContext): any {
    if (ctx.data instanceof Pagination) {
      // /!\ don't modify the ctx.data. at this step, the serializer has already been called.
      const totalCount = ctx.data.data.length;
      const startIndex = ctx.data.offset;
      const endIndex = ctx.data.offset + ctx.data.limit + 1 > totalCount ? ctx.data.data.length : ctx.data.offset + ctx.data.limit;
      data = ctx.data.data.slice(startIndex, endIndex);
      ctx.response.setHeader("X-Total-Count", totalCount);
      ctx.response.setHeader("X-Result-Count", data.length);
    }

    return data;
  }
}
