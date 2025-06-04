export interface ProductDataI {
  id: string;
  title: string;
  relatedLinks: RelatedLinksI;
  images: string[];
  productInfo: ProductInfoI;
  specs: SpecsI[];
  descriptionBox: DescriptionBoxI;
  purchaseBox: PurchaseBoxI;
  sellerBox: SellerBoxI;
}

export interface RelatedLinksI {
  suggestions: RelatedLinksSuggestionI[];
  breadcrumbs: RelatedLinksSuggestionI[];
  actions: RelatedLinksSuggestionI[];
}

export interface RelatedLinksSuggestionI {
  label: string;
  href: string;
}

export interface ProductInfoI {
  status: string;
  sold: string;
  isFavorite: boolean;
  bestSeller: boolean;
  rank: {
    position: number;
    category: string;
    link: string;
  };
  title: string;
  rating: number;
  ratingCount: number;
  stars: string;
  price: number;
  priceFormatted: string;
  installments: number;
  installment: string;
  installmentsInfo: string;
  paymentLink: string;
  color: string;
  colorVariants: { name: string; hex: string; selected: boolean }[];
  features: string[];
  featuresLink: string;
  buyOptions: string;
  buyOptionsLink: string;
}

export interface SpecsI {
  icon: string;
  label: string;
  value?: string | boolean;
  size?: string;
  dimensions?: string;
  comparison?: {
    min: number;
    max: number;
    current: number;
  };
}

export interface DescriptionBoxI {
  title: string;
  blocks: DescriptionBoxBlockI[];
}

export interface DescriptionBoxBlockI {
  subtitle: string;
  text: string;
}

export interface PurchaseBoxI {
  shipping: string;
  stock: string;
  seller: {
    name: string;
    link: string;
    sales: string;
  };
  benefits: BenefitI[];
}

export interface BenefitI {
  icon: string;
  text: string;
  description: string;
  link: string | null;
}

export interface SellerBoxI {
  title: string;
  products: string;
  reputationBar: number;
  metrics: {
    icon: string | null;
    check: boolean;
    label: string;
    value: string | null;
  }[];
  button: {
    link: string;
  };
}
