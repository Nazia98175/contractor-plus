// app/lib/useOneLinkRedirect.ts
"use client";

import { useState } from "react";
import { generateOneLinkUrl } from "./generateOneLinkUrl";

export const useOneLinkRedirect = () => {
  const [loading, setLoading] = useState(false);

  const handleRedirect = ({
    pathname,
    email,
    forceSameTab = false, // optional override
    forceNewTab = false,
  }: {
    pathname: string;
    email?: string;
    forceSameTab?: boolean;
    forceNewTab?: boolean;
  }) => {
    setLoading(true);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const useNewTab = forceNewTab || (!isMobile && !forceSameTab);
    const url = generateOneLinkUrl(pathname, email ? { email } : {});

    if (useNewTab) {
      window.open(url, "_blank");
      setLoading(false);
    } else {
      window.location.href = url;
    }
  };

  return { loading, handleRedirect };
};
