# How to Add PDF Documents to the Investor Bubbles

Follow these steps to display your PDFs when investors click each of the five bubbles.

---

## Step 1: Prepare Your PDF Files

Have your five PDF documents ready:
- **1-pager** – your one-page overview
- **Presentation Deck** – your main pitch deck
- **Special Purpose Vehicle Option** – SPV materials
- **Case Studies & Track Record** – appendix/case studies
- **FAQs** – frequently asked questions

---

## Step 2: Rename Your PDFs (if needed)

Your PDF files must use these **exact** filenames:

| Bubble | Required Filename |
|--------|-------------------|
| 1-pager | `1-pager.pdf` |
| Presentation Deck | `presentation-deck.pdf` |
| Special Purpose Vehicle Option | `special-purpose-vehicle.pdf` |
| Case Studies & Track Record | `case-studies-track-record.pdf` |
| FAQs | `faqs.pdf` |

---

## Step 3: Add the PDFs to the Project

1. Open your project folder: `valkyrie-revival-fund`
2. Go into the `documents` folder
3. Copy or drag your five PDF files into `documents`
4. Confirm each file has the correct name from the table above

Your folder structure should look like:

```
valkyrie-revival-fund/
├── documents/
│   ├── 1-pager.pdf
│   ├── presentation-deck.pdf
│   ├── special-purpose-vehicle.pdf
│   ├── case-studies-track-record.pdf
│   └── faqs.pdf
├── 1-pager.html
├── presentation-deck.html
├── spv-deck.html
├── appendix.html
├── faqs.html
└── ...
```

---

## Step 4: Test Locally

1. Open the site in your browser (e.g. by opening `index.html` or running a local server)
2. Go to the Investor Home page (`investorhome-verified.html`)
3. Click each of the five bubbles
4. Confirm the correct PDF loads and displays on each page

---

## Troubleshooting

**PDF doesn’t show**
- Check the filename matches exactly (including hyphens and lowercase)
- Ensure the PDF is in the `documents` folder
- Some browsers block PDFs in iframes when opening files directly from disk; try using a local server (e.g. `python -m http.server 8000` or VS Code Live Server)

**Different filenames**
If you prefer different filenames, update the `src` in each HTML file:
- `1-pager.html` → `documents/YOUR-FILENAME.pdf`
- `presentation-deck.html` → `documents/YOUR-FILENAME.pdf`
- `spv-deck.html` → `documents/YOUR-FILENAME.pdf`
- `appendix.html` → `documents/YOUR-FILENAME.pdf`
- `faqs.html` → `documents/YOUR-FILENAME.pdf`
