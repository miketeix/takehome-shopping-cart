class CartService {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity = 1) {
      if (quantity <= 0) return false;
      
      if (product.stock < quantity) {
        alert(`Sorry, only ${product.stock} ${product.name} available.`);
        return false;
      }
  
      const existingItem = this.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        if (product.stock < existingItem.quantity + quantity) {
          alert(`Sorry, only ${product.stock} ${product.name} available.`);
          return false;
        }
        
        existingItem.quantity += quantity;
      } else {
        this.items.push({
          product,
          quantity
        });
      }
      
      return true;
    }
    getItems() {
      return [...this.items];
    }
