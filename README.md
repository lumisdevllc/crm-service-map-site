# CRM Group Service-Area Map

A responsive static map for embedding on CRM Group's website. Gold areas indicate the states and territories supplied by the embedding page.

## URL input

Append a comma-separated list of two-letter codes, for example:

```text
?states=id,ut,wa,dc,pr
```

Codes are case-insensitive. Duplicates, unknown codes and malformed values are ignored. With no valid codes, no areas are highlighted. The map includes the 50 states, District of Columbia, and American Samoa (`as`), Guam (`gu`), Northern Mariana Islands (`mp`), Puerto Rico (`pr`), and U.S. Virgin Islands (`vi`). The embedding page is responsible for providing the correct licensed locations.

## Static files

- `index.html` — complete map markup and accessible description
- `map.css` — responsive layout and CRM Group styling
- `map.js` — validated query parsing and highlighting
- `source-map.svg` — unmodified source geometry
- `SOURCE-PROVENANCE.md` — geometry source, license and modifications

The map has no navigation targets, client records, credentials, tracking, forms, or external runtime dependencies. Serving these files does not update any website iframe automatically.
