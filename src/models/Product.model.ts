export interface ProductI {
  id: number
  title: string
  price: number
  description: string
  category: CategoryI
  images: string[]
}

export interface CategoryI {
  id: number
  name: string
  image: string
}
