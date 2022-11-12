const API = process.env.NEXT_PUBLIC_API_URL
const VERSION = process.env.NEXT_PUBLIC_API_VERSION

const endpoints = {
  products: {
    getProducts: `${API}/api/${VERSION}/products/`,
    postProducts: `${API}/api/${VERSION}/products/`,
    getProduct: (id: string) => `${API}/api/${VERSION}/products/${id}`,
    putProducts: (id: string) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id: string) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategoriesProduct: (id: string) => `${API}/api/${VERSION}/categories/${id}/products`,
    putCategories: (id: string) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (fileName: string) => `${API}/api/${VERSION}/${fileName}`,
  },
}

export default endpoints
