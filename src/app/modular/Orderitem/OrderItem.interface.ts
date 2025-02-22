export interface TOrder {
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  country: string;
  state: string;
  zip: string;
  email: string;
  phone: string;
  cart: Product[];
  subtotal: number;
  paymentMethod: string;
}

interface Product {
  _id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
