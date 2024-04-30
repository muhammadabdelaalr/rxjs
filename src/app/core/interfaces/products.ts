export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

export function sortProducts(n1: Product,n2: Product) {
  return n1.id - n2.id
}
