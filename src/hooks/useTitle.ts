import { useEffect } from "react";

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export const useTitle = (title?: string) => {
  useEffect(() => {
    document.title = `${title} - Conner Pohl Instruction`;
  }, [title]);

  return null;
};

export const useSEO = ({ title, description, keywords, ogImage }: SEOData) => {
  useEffect(() => {
    // Set title
    if (title) {
      document.title = `${title} - Conner Pohl Instruction`;
    }

    // Set or update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = description;
        document.getElementsByTagName("head")[0].appendChild(meta);
      }
    }

    // Set or update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = keywords;
        document.getElementsByTagName("head")[0].appendChild(meta);
      }
    }

    // Set or update Open Graph image
    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute("content", ogImage);
      }
    }
  }, [title, description, keywords, ogImage]);
};
