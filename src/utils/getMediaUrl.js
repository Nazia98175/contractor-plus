export const getMediaUrl = (mediaObject) => {
    if (!mediaObject?.url) return null;
    const url = mediaObject.url.replace("/" , "");
    return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api" , "/")}${url}`;
  };
