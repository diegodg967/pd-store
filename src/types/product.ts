export interface IProductResponseVariant {
  id: string;
  price: string | number;
  featured_image: {
    src: string;
  };
}

export interface IProductResponse {
  id: string;
  title: string;
  variants: IProductResponseVariant[];
}

export interface IProductsResponse {
  products: IProductResponse[];
}

export interface IProduct {
  id: string;
}
