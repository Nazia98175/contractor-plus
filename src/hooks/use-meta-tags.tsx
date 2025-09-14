
import { useEffect } from 'react';

type MetaTagsProps = {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
};

/**
 * A hook to set meta tags for SEO optimization
 */
export function useMetaTags({ title, description, canonicalUrl, keywords }: MetaTagsProps) {
  useEffect(() => {
    // Save the original title to restore later
    const originalTitle = document.title;
    
    // Update the document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Handle canonical URL if provided
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', canonicalUrl);
    }
    
    // Clean up function to restore the original title when component unmounts
    return () => {
      document.title = originalTitle;
      // We don't remove meta tags on cleanup as they should persist
    };
  }, [title, description, canonicalUrl, keywords]);
}
