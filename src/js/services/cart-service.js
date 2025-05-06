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
    calculateTotals() {
      let subtotal = 0;
      let savings = 0;
      let finalTotal = 0;
      const appliedCoupons = [];
      this.items.forEach(item => {
        subtotal += item.product.price * item.quantity;
      });
  
      // Apply B2GO (Buy 2 Get 1 Free) coupons
      this.items.forEach(item => {
        if (item.product.coupons && item.product.coupons.includes('B2GO') && item.quantity >= 3) {
          // Calculate how many free items should be given
          const freeItems = Math.floor(item.quantity / 3);
          const discount = freeItems * item.product.price;
          
          savings += discount;
          appliedCoupons.push({
            name: 'B2GO',
            productId: item.product.id,
            productName: item.product.name,
            savings: discount
          });
        }
      });
  
      finalTotal = subtotal - savings;
  
      return {
        subtotal,
        savings,
        finalTotal,
        appliedCoupons
      };
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