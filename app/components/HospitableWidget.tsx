"use client";

/**
 * HospitableWidget — embeds Hospitable's per-property booking widget.
 *
 * Each property has its own widget URL. Get it from:
 *   Hospitable → Direct → Open your widget in edit mode → Find the property → Copy widget code
 *
 * The URL looks like:
 *   https://booking.hospitable.com/widget/WIDGET-ID/PROPERTY-ID
 *
 * Add it to the property entry in app/data/properties.ts under `widgetUrl`.
 */
export default function HospitableWidget({ widgetUrl }: { widgetUrl: string }) {
  // Show a friendly placeholder if the widget URL hasn't been filled in yet
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
    <>
      {/* Required script: forwards redirect events from the widget iframe to the parent window */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('message', function(event){
              if (event.data && event.data.hospitable_widget_redirect) {
                window.location.href = event.data.hospitable_widget_redirect;
              }
            });
          `,
        }}
      />
      <iframe
        src={widgetUrl}
        title="Booking Widget"
        style={{ width: "100%", height: "900px", minWidth: "320px", border: 0 }}
        sandbox="allow-top-navigation allow-scripts allow-same-origin allow-forms"
        loading="lazy"
      />
    </>
  );
}
