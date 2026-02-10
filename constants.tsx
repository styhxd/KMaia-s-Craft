import React from 'react';
import { Product, ProductCategory } from './types';

// Original ID: 1KRXwCG8S3YOMZo6Y-21JGAnbkHtwREIN
export const FACADE_IMAGE_URL = "https://lh3.googleusercontent.com/d/1KRXwCG8S3YOMZo6Y-21JGAnbkHtwREIN";

// Updated Logo ID per user request
export const LOGO_IMAGE_URL = "https://lh3.googleusercontent.com/d/1KRXwCG8S3YOMZo6Y-21JGAnbkHtwREIN";

export const WHATSAPP_NUMBER = "5511999676189";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kit Fandom Starter',
    description: '3 Bottons personalizados (3.5cm) + 1 Photocard exclusivo. Ideal para colecionadores.',
    price: 15.00,
    category: ProductCategory.KIT,
    imageUrl: 'https://picsum.photos/seed/kit1/400/400',
    isNew: true
  },
  {
    id: '2',
    name: 'Quadro MDF Vintage',
    description: 'Quadro em MDF 20x30cm com acabamento premium e arte personalizada.',
    price: 35.00,
    category: ProductCategory.FRAME,
    imageUrl: 'https://picsum.photos/seed/mdf1/400/400'
  },
  {
    id: '3',
    name: 'Bottons Temáticos',
    description: 'Bottons de 4.5cm com película protetora. Diversos temas disponíveis.',
    price: 5.00,
    category: ProductCategory.BUTTON,
    imageUrl: 'https://picsum.photos/seed/btn1/400/400'
  },
  {
    id: '4',
    name: 'Photocard Holográfico',
    description: 'Impressão de alta qualidade com acabamento holográfico. Verso branco ou personalizado.',
    price: 4.00,
    category: ProductCategory.PHOTOCARD,
    imageUrl: 'https://picsum.photos/seed/photo1/400/400'
  },
  {
    id: '5',
    name: 'Chaveiro Acrílico',
    description: 'Chaveiro resistente com arte frente e verso. Acompanha tassel colorido.',
    price: 12.00,
    category: ProductCategory.KEYCHAIN,
    imageUrl: 'https://picsum.photos/seed/key1/400/400'
  },
  {
    id: '6',
    name: 'Kit Duo',
    description: '1 Botton grande + 1 Photocard. O presente perfeito para amigos.',
    price: 8.00,
    category: ProductCategory.KIT,
    imageUrl: 'https://picsum.photos/seed/kit2/400/400'
  }
];