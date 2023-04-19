export interface IProductResponseVariant {
  id: string;
  featured_image: {
    src: string;
  };
  price: string | number;
  title: string;
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
  title: string;
  variants: IProductResponseVariant[];
}
