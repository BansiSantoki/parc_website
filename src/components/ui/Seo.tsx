import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
};

function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(path: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', `${window.location.origin}${path}`);
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setCanonical(window.location.pathname);
  }, [title, description]);

  return null;
}