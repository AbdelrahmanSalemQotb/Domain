export type Marketplace = 'Atom' | 'Afternic' | 'Sedo' | 'GoDaddy' | 'Spaceship' | 'Other';

export interface Listing {
  platform: Marketplace;
  price: number;
  url: string;
  currency?: string; // default USD
}

export interface Domain {
  name: string;
  listings: Listing[];
  highlight?: boolean; // For "Featured" status
  category?: string;
  image?: string; // Optional URL for branded image
  description?: string; // Optional short description/tagline
}

export const domains: Domain[] = [
  {
    name: "cloudnexus.ai",
    highlight: true,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500&ixlib=rb-4.0.3",
    description: "The future of cloud connection and AI integration.",
    listings: [
      {
        platform: "Atom",
        price: 2999,
        url: "https://atom.com/cloudnexus.ai"
      },
      {
        platform: "Afternic",
        price: 3200,
        url: "https://afternic.com/cloudnexus.ai"
      },
      {
        platform: "Sedo",
        price: 3500,
        url: "https://sedo.com/cloudnexus.ai"
      }
    ]
  },
  {
    name: "devspark.io",
    highlight: true,
    category: "Development",
    // No image - testing fallback
    description: "Ignite your development workflow.",
    listings: [
      {
        platform: "Spaceship",
        price: 499,
        url: "https://spaceship.com/devspark.io"
      },
      {
        platform: "Afternic",
        price: 550,
        url: "https://afternic.com/devspark.io"
      }
    ]
  },
  {
    name: "financeflow.com",
    highlight: false,
    category: "Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&ixlib=rb-4.0.3",
    listings: [
      {
        platform: "GoDaddy",
        price: 15000,
        url: "#"
      },
      {
        platform: "Sedo",
        price: 14500,
        url: "#"
      }
    ]
  },
  {
    name: "healthpulse.org",
    highlight: false,
    category: "Health",
    listings: [
      {
        platform: "Afternic",
        price: 800,
        url: "#"
      }
    ]
  },
  {
    name: "pixelcraft.design",
    highlight: true,
    category: "Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&q=80&w=500&ixlib=rb-4.0.3",
    listings: [
      {
        platform: "Atom",
        price: 1200,
        url: "#"
      },
      {
        platform: "Afternic",
        price: 1300,
        url: "#"
      }
    ]
  },
   {
    name: "ecosphere.green",
    highlight: false,
    category: "Environment",
    listings: [
      {
        platform: "Sedo",
        price: 250,
        url: "#"
      }
    ]
  },
  {
    name: "rapidroute.net",
    highlight: false,
    category: "Transport",
    listings: [
      {
        platform: "GoDaddy",
        price: 120,
        url: "#"
      },
       {
        platform: "Spaceship",
        price: 99,
        url: "#"
      }
    ]
  },
  {
    name: "quantumgate.tech",
    highlight: true,
    category: "Technology",
    description: "Gateway to quantum computing.",
    listings: [
      {
        platform: "Atom",
        price: 5000,
        url: "#"
      }
    ]
  }
];
