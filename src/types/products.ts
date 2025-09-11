export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  images: string[];
  materials: string[];
  season: 'spring' | 'summer' | 'autumn' | 'winter' | 'all-seasons';
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  features: string[];
  inStock: boolean;
  category: 'lichtsculptuur' | 'schilderij';
}