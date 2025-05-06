/**
 * Product model class
 */
export class Product {
    constructor(id, name, price, stock, coupons = []) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.stock = stock;
      this.coupons = coupons;
    }
  }