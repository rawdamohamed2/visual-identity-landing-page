export interface ServiceRequest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  description: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'completed';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  accentColor: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
