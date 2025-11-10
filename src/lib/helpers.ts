export const isValidLink = (link: string | undefined) => {
  if (!link) return false;
  const linkRegex = /^https?:\/\//i;
  return (
    linkRegex.test(link) ||
    link.startsWith("www.") ||
    link.startsWith("http://")
  );
};
