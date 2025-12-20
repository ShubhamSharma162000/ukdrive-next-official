"use client";

import React, { useState } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";

export default function EmotionRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a new emotion cache for each render on the client
  const [cache] = useState(() => {
    const emotionCache = createCache({
      key: "mui",
      prepend: true,
    });
    emotionCache.compat = true;
    return emotionCache;
  });

  // Inject emotion styles during SSR
  useServerInsertedHTML(() => {
    const { key, inserted } = cache;

    const styles = Object.entries(inserted)
      .map(([styleKey, style]) => {
        return `<style data-emotion="${key} ${styleKey}">${style}</style>`;
      })
      .join("");

    return <span dangerouslySetInnerHTML={{ __html: styles }} />;
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
