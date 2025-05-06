class CartService {
    constructor() {
      this.items = [];
      this.listeners = [];
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
      
      // Notify listeners that cart has changed
      this._notifyListeners();
      return true;
    }
    removeItem(productId) {
      const initialLength = this.items.length;
      this.items = this.items.filter(item => item.product.id !== productId);
      
      if (this.items.length !== initialLength) {
        this._notifyListeners();
        return true;
      }
      
      return false;
    }
    getItems() {
      return [...this.items];
    }
    subscribe(listener) {
      this.listeners.push(listener);
    }
    clear() {
      this.items = [];
      this._notifyListeners();
    }
    _notifyListeners() {
      this.listeners.forEach(listener => listener(this.items));
    }
  }
  export const cartService = new CartService();