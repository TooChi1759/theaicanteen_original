/** Renders a JSON-LD structured-data block. Escapes '<' so a stray "</script>" in
 * any string value can't break out of the script tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
