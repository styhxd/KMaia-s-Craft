export enum ProductCategory {
  BUTTON = 'Bottons',
  FRAME = 'Quadros MDF',
  KEYCHAIN = 'Chaveiros',
  PHOTOCARD = 'Photocards',
  KIT = 'Kits Especiais'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
  isNew?: boolean;
}

export interface ContactInfo {
  whatsapp: string;
  whatsappDisplay: string;
  instagram?: string;
}