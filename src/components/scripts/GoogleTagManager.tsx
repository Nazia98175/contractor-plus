import React from "react";

const GA_ID = "G-LM5B6PJHZR";

export default function GoogleTagManager() {
  const inlineScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script dangerouslySetInnerHTML={{ __html: inlineScript }} />
    </>
  );
}
