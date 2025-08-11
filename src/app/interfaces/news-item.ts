export interface NewsItem {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  content?: string;
  // links?: string[]; - if links needed in future
}
