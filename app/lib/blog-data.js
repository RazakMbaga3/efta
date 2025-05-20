// blog-data.js
export const categories = [
  { name: "Electrical Engineering", slug: "electrical-engineering" },
  { name: "Renewable Energy", slug: "renewable-energy" },
  { name: "Building Automation", slug: "building-automation" },
  { name: "Energy Storage", slug: "energy-storage" },
  { name: "Power Distribution", slug: "power-distribution" },
  { name: "Technical Knowledge", slug: "technical-knowledge" }
];

export const blogPosts = [
  {
    id: 'smart-grid-technology',
    title: "The Future of Smart Grid Technology",
    slug: "smart-grid-technology",
    excerpt: "Exploring how smart grid technology is revolutionizing power distribution and management in East Africa.",
    content: "Full article content will go here...",
    coverImage: "/images/projects/smartgrid.jpg",
    date: "2025-04-15",
    author: "John Smith",
    category: "Power Distribution",
    readTime: "5 min read"
  },
  {
    id: 'renewable-energy-industrial',
    title: "Renewable Energy Solutions for Industrial Applications",
    slug: "renewable-energy-industrial",
    excerpt: "How businesses can benefit from implementing renewable energy solutions in their industrial operations.",
    content: "Full article content will go here...",
    coverImage: "/images/projects/solar.jpg",
    date: "2025-04-01",
    author: "Sarah Johnson",
    category: "Renewable Energy",
    readTime: "4 min read"
  },
  {
    id: 'industrial-automation',
    title: "Industrial Automation Best Practices",
    slug: "industrial-automation",
    excerpt: "Key considerations and best practices for implementing industrial automation systems.",
    content: "Full article content will go here...",
    coverImage: "/images/projects/industrial.webp",
    date: "2025-03-20",
    author: "Michael Chen",
    category: "Building Automation",
    readTime: "6 min read"
  }
];

export const getFeaturedPost = () => {
  return blogPosts[0]; // Returns the most recent post as featured
};

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category) => {
  if (!category) return blogPosts;
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};
