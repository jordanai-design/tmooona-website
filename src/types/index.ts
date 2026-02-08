export interface Product {
  slug: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  categorySlug: string;
  categories: string[];
  images: ProductImage[];
  dimensions?: string;
  materials?: string;
  sizeOptions?: SizeOption[];
  isNew?: boolean;
  isFeatured?: boolean;
  relatedSlugs?: string[];
}

export interface ProductImage {
  src: string;
  alt: string;
  isMain: boolean;
}

export interface SizeOption {
  label: string;
  price: number;
}

export interface Category {
  slug: string;
  name: string;
  nameEn: string;
  description?: string;
  image: string;
  order: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface SiteConfig {
  businessName: string;
  phone: string;
  phoneSecondary: string;
  email: string;
  emailSecondary: string;
  address: string;
  whatsappNumber: string;
  socialLinks: {
    facebook: string;
    instagram: string;
  };
}
