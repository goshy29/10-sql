// 143. Fetching Products from Mysql
const db = require("../util/database"); 

const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // 145. Inserting Data Into the Database
  save() {
    db.execute("INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)",
      [this.title, this.price, this.imageUrl, this.description]);
  }

  static deleteById(id) {

  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  // 146. Fetching a Single Product with the WHERE condition
  static findById(id) {
    return db.execute("SELECT * FROM products WHERE id = ?", [id]);
  }
};
