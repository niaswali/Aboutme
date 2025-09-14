import React from 'react';

// For the main navigation cards on the home page
export interface NavData {
  id: string;
  title:string;
  description: string;
  color: string; // hex color for shadow
  icon?: string; // Optional icon identifier
  backgroundImage?: string; // Optional base64 image source for card background
}

// For a single item within a content page (e.g., one school, one quote)
export interface ContentItem {
  title: string;
  subtitle?: string;
  content: string;
  lesson?: string; // The takeaway message from the book/novel
  linkId?: string; // Optional ID to link to another page
  type?: 'paragraph' | 'quote';
  review?: string; // Optional review/notes for items like movies/series
  chatgptReview?: string; // Optional review from ChatGPT
  watchLink?: string;
  posterSrc?: string; // Optional base64 image source for movie/series posters
  cardBgImage?: string; // Optional base64 image for card background if no poster
}

// For the entire data structure of a sub-page
export interface PageData {
  id: string; // matches NavData id
  title: string;
  items: ContentItem[];
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'instagram' | 'facebook' | 'tiktok' | 'github';
}