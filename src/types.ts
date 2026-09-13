export interface Service {
  slug: string;
  name: string;
  price: string;
  category: 'cuts-shaves' | 'grooming';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  inclusions: string[];
  image: string;
  featuredOrder: number;
}

export interface TeamMember {
  slug: string;
  name: string;
  image: string;
  role: string;
  verifiedInfo: string;
  specialties: string[];
}

export interface ProductBrand {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  items: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior & Stations' | 'Lounge & Courtyard' | 'Grooming & Treatments' | 'Products & Apothecary';
  image: string;
  description: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface DiscountOffer {
  id: string;
  title: string;
  discount: string;
  scope: string;
  description: string;
  requirement: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  established: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phone: string;
  phoneRaw: string;
  email: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  bookingUrl: string;
  giftCardUrl: string;
  instagramUrl: string;
  facebookUrl: string;
}
