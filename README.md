# Ascend Labs — Launch Website

> Pure static website for an independent technology collective:
> 1. One-Month IT Internship Programme for engineering students
> 2. College Ambassador Programme for campus student leaders
> 3. Website development for local businesses, shops, cafes, and clinics
> 4. Engineering Notes Hub initially serving DBATU and SPPU students

---

## 📁 Project Structure

```text
├── index.html               # Main launch homepage (exact 9 sections preserved)
├── internship.html          # 1-Month IT Internship Programme details & syllabus
├── campus-ambassador.html   # College Ambassador leadership role overview
├── web-development.html     # Business website services, workflow & deliverables
├── engineering-notes.html   # Notes hub with DBATU/SPPU switcher & filters
├── about.html               # Founder story, collective ethics, and transparency
├── contact.html             # Dedicated communication hub & enquiry form
├── privacy-policy.html      # Plain-language privacy policy & student data protection
├── terms.html               # Terms of use with academic non-affiliation disclaimer
├── site-config.js           # Centralized configuration (brand, content, form, notes)
├── script.js                # Form validation, brand hydration, notes filtering, mobile nav
└── styles.css               # Editorial CSS design system, typography & animations
```

---

## 🚀 Running Locally

The site requires **no build tools or node package installations**. It runs as pure static HTML5, CSS3, and modern JavaScript.

### Option 1: Direct Browser Launch
Double-click `index.html` (or right-click and choose **Open with Google Chrome / Firefox / Edge / Safari**).

### Option 2: Local HTTP Server
```bash
npx serve .
# Or using Python:
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Editing Content & Working Brand

All core content, brand metadata, and settings are centralized in **`site-config.js`**:

```javascript
// site-config.js
const ASCEND_CONFIG = {
  brand: {
    name: "ASCEND LABS",
    symbol: "A",
    tagline: "Learn. Build. Lead.",
    legalNotice: "Working brand identity - final legal company name to be confirmed during registration."
  },
  contact: {
    email: "contact@ascendlabs.in",
    phone: "+91 98765 43210",
    location: "Maharashtra, India"
  }
};
```

---

## 📬 Enquiry Submissions

- The enquiry forms feature built-in client validation and store all submissions securely in browser `localStorage` under `ascend_labs_enquiries` so no data is ever lost.
- To view saved submissions in the browser console, run:
  ```javascript
  console.table(JSON.parse(localStorage.getItem('ascend_labs_enquiries') || '[]'));
  ```
- If an optional backend API or webhook URL is provided in `site-config.js`, the form will quietly post submissions in the background.
