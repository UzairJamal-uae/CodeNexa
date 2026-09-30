import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
}

export default function SEO({
  title,
  description,
  path = '/',
  type = 'website',
}: SEOProps) {
  useEffect(() => {
    const canonicalUrl = `https://codenexa.co${path}`;

    // Page title
    document.title = title;

    // Meta description
    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute('content', description);

    // Canonical URL
    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute('href', canonicalUrl);

    // Open Graph helper
    const setOGTag = (property: string, content: string) => {
      let tag = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    setOGTag('og:title', title);
    setOGTag('og:description', description);
    setOGTag('og:url', canonicalUrl);
    setOGTag('og:type', type);
    setOGTag('og:site_name', 'CodeNexa');

    // Twitter/X
    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', title);
    setTwitterTag('twitter:description', description);

  }, [title, description, path, type]);

  return null;
}