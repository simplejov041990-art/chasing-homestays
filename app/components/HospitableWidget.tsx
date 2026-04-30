"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HospitableWidget — embeds Hospitable's per-property booking widget.
 *
 * Each property has its own widget URL. Get it from:
 *   Hospitable → Direct → Open your widget in edit mode → Find the property → Copy widget code
 */
export default function HospitableWidget({ widgetUrl }: { widgetUrl: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(470); // tight default that fits unbooked state; grows via postMessage when dates selected

  useEffect(() => {
    const onMsg = (event: MessageEvent) => {
      const data = event.data;
      if (!data || typeof data !== "object") return;

      // Existing redirect behavior
      if (data.hospitable_widget_redirect) {
        window.location.href = data.hospitable_widget_redirect;
        return;
      }

      // Auto-resize when Hospitable sends a height
      // (different versions use different keys — check several)
      const candidate =
        data.hospitable_widget_height ??
        data.height ??
        (data.type?.includes("height") ? data.value : null);
      if (typeof candidate === "number" && candidate > 200 && candidate < 2000) {
        setHeight(candidate);
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  if (!widgetUrl || widgetUrl.includes("REPLACE-ME")) {
    return (
      <div className="border-2 border-dashed border-ink/20 rounded-lg p-12 text-center bg-cream">
        <p className="font-serif text-2xl italic mb-3">Booking widget not configured</p>
        <p className="text-ink-soft text-sm max-w-md mx-auto">
          Add this property&apos;s <code className="bg-ink/10 px-2 py-0.5 rounded">widgetUrl</code> in{" "}
          <code className="bg-ink/10 px-2 py-0.5 rounded">app/data/properties.ts</code> to enable booking.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-accent rounded-2xl p-3 shadow-xl">
      <iframe
        ref={iframeRef}
        src={widgetUrl}
        title="Booking Widget"
        style={{
          width: "100%",
          height: `${height}px`,
          minWidth: "320px",
          border: 0,
          colorScheme: "light",
          backgroundColor: "white",
          borderRadius: "12px",
          display: "block",
          transition: "height 200ms ease",
        }}
        sandbox="allow-top-navigation allow-scripts allow-same-origin allow-forms"
        loading="lazy"
      />
    </div>
  );
}
