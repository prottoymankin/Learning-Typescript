interface User {
  id: number;
  name: string;
  email: string;
};

interface Product {
  id: number;
  title: string;
  price: number;
};

interface IRepository <T> {
  getAll: () => T[];
  getById: (id: number) => T | undefined;
  add: (item: T) => void;
  delete: (id: number) => void;
};

class MemoryRepository<T extends { id: number }> implements IRepository<T> {
  private items: T[] = [];
  getAll(): T[] {
    return this.items;
  };

  getById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  };

  add(item: T) {
    this.items.push(item);
    console.log(`Saved item with ID: ${item.id}`);
  };

  delete(id: number) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  };

};

const userRepository = new MemoryRepository<User>();
userRepository.add({ id: 1, name: 'Alice', email: 'alice@gmail.com' });
const allUser = userRepository.getAll();
console.log(allUser);

const productRepository = new MemoryRepository<Product>();
productRepository.add({ id: 101, title: 'Mechanical Keyboard', price: 4999 });
const product = productRepository.getById(101);
console.log(product ?? 'Product not found');