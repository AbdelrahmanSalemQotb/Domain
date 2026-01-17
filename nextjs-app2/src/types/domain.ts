export interface DomainResult {
  domain: string;
  available: boolean;
  price: number;
  popular: boolean;
}

export interface DomainExtension {
  ext: string;
  price: number;
  discount: string | null;
  hot: boolean;
}
