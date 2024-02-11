export type LayoutType = "herobanner" | "productcarousel";

export interface BannerImage {
  src: string;
  alt: string;
}

export interface Banner {
  image: BannerImage;
}

export interface ProductCarousalImage {
  images: string[];
}

export interface ProductCarousal {
  products: ProductCarousalImage[];
}

export interface Component {
  name: LayoutType;
  props: Banner | ProductCarousal;
}

export interface Data {
  components: Component[];
}

export interface LayoutAPIResponse {
  data: Data;
}
