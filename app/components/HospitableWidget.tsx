"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HospitableWidget — embeds Hospitable's per-property booking widget.
 *
 * The widget is cross-origin so we can't introspect or style its internals.
 * To avoid white dead space below the widget without clipping the booked
 * state, we start at a tight default and grow on first user interaction.
 */
export default function HospitableWidget({ widgetUrl }: { widgetUrl: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(500); // tight default for unbooked state
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onMsg = (event: MessageEvent) => {
      const data = event.data;
      if (!data || typeof data !== "object") return;

      if (data.hospitable_widget_redirect) {
        window.location.href = data.hospitable_widget_redirect;
        return;
      }

      // If Hospitable ever emits a height, honor it
      const candidate =
        data.hospitable_widget_height ??
        data.height ??
        (data.type?.includes("height") ? data.value : null);
      if (typeof candidate === "number" && candidate > 200 && candidate < 2000) {
        setHeight(candidate);
        setExpanded(true);
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // Grow on first interaction (hover/focus/click) so price-details fit when dates are selected
  const expand = () => {
    if (!expanded) {
      setExpanded(true);
      setHeight(720);
    }
  };

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
    <div
      className="bg-accent rounded-2xl p-3 shadow-xl"
      onPointerEnter={expand}
      onFocus={expand}
    >
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
          transition: "height 250ms ease",
        }}
        sandbox="allow-top-navigation allow-scripts allow-same-origin allow-forms"
        loading="lazy"
      />
    </div>
  );
}
