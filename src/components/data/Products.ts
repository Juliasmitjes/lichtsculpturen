import { Product } from '../../types/products';
import lichtsculptuur1 from '@/assets/lichtsculptuur-1.jpg';
import lichtsculptuur2 from '@/assets/lichtsculptuur-2.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Najaarslicht',
    description: 'Organische vormen in warme aardtinten',
    longDescription: 'Deze prachtige lichtsculptuur brengt de warmte van de herfst in huis. Gemaakt met zorgvuldig geselecteerde materialen die de natuurlijke schoonheid van het seizoen weerspiegelen. De warme LED-verlichting creëert een intieme sfeer die perfect past bij koude herfstavonden.',
    price: 295,
    images: [lichtsculptuur1, lichtsculptuur2],
    materials: ['Berkenhouten stokken', 'Warme LED-lichtsnoer', 'Biologisch linnen', 'Gevilte wol', 'Denneappels', 'IJzeren ringen'],
    season: 'autumn',
    dimensions: {
      height: '180 cm',
      width: '120 cm', 
      depth: '120 cm'
    },
    features: [
      'Handgemaakt met natuurlijke materialen',
      'Energiezuinige LED-verlichting',
      'Eenvoudig op te bergen na gebruik',
      'Seizoensgebonden decoratie mogelijk',
      'Duurzaam en milieuvriendelijk'
    ],
    inStock: true,
    category: 'lichtsculptuur'
  },
  {
    id: '2',
    name: 'Licht in stijl',
    description: 'Minimalistische elegantie voor moderne interieurs',
    longDescription: 'Een tijdloze lichtsculptuur die zich perfect aanpast aan elk modern interieur. De cleane lijnen en neutrale tinten maken deze sculptuur een elegante toevoeging aan elke ruimte. Het zachte licht creëert een serene atmosfeer.',
    price: 275,
    images: [lichtsculptuur2, lichtsculptuur1],
    materials: ['Beukenhout', 'Warm wit LED-snoer', 'Natuurlijk linnen', 'RVS bevestigingen'],
    season: 'all-seasons',
    dimensions: {
      height: '160 cm',
      width: '100 cm',
      depth: '100 cm'
    },
    features: [
      'Tijdloos design',
      'Hoogwaardige materialen',
      'Dimbare LED-verlichting',
      'Makkelijk te monteren',
      'Geschikt voor alle seizoenen'
    ],
    inStock: true,
    category: 'lichtsculptuur'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};