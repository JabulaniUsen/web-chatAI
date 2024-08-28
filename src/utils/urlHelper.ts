export function getFullUrl(path: string): string {
    if (typeof window !== 'undefined') {
      const baseUrl = window.location.origin;
      return `${baseUrl}/${path}`;
    }
    return `http://localhost:3000/${path}`;
  }
  