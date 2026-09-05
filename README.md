# 🎓 ITL Trisakti — Academic Digital Hub

A lightweight academic landing page for **Institut Transportasi dan Logistik Trisakti (ITL Trisakti)**.

The repository provides a centralized gateway to:

- Academic HTML course decks
- Teaching & learning resources
- The official ITL Trisakti Academic Portal
- Automatically generated resource listings

## 🌐 Academic Portal

The official academic information system is available at:

**https://academic.itltrisakti.ac.id/**

The landing page intentionally opens the Academic Portal in a new tab instead of embedding it in an iframe. This preserves the portal's authentication/session behavior and avoids login/session issues caused by embedded third-party pages.

## 📚 Current Resources

| Resource | Type | Category |
| --- | --- | --- |
| Analitika Bisnis | Course Deck | Teaching |
| Pengantar Manajemen | Course Deck | Teaching |

## 🚀 GitHub Pages

To publish the hub:

1. Open the repository **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main`.
5. Select folder `/ (root)`.
6. Save.

The landing page will then be available through the repository's GitHub Pages URL.

## 🔄 Automatic Resource Discovery

You do **not** need to manually edit the landing page every time a new HTML resource is added.

The GitHub Actions workflow:

```text
.github/workflows/generate-academic-hub.yml
```

automatically scans the repository for `.html` files and generates:

```text
projects.json
```

The landing page reads `projects.json` and creates the resource cards dynamically.

### Adding a new resource

Simply add a new `.html` file to the `main` branch.

For example:

```text
Statistika Bisnis.html
```

Push the change:

```bash
git add .
git commit -m "Add Statistika Bisnis course deck"
git push origin main
```

GitHub Actions will regenerate `projects.json`.

## 🏷️ Optional HTML Metadata

For better cards, an HTML resource can include these metadata tags:

```html
<meta name="academic-category" content="Teaching">
<meta name="academic-type" content="Course Deck">
<meta name="academic-description" content="Deck pembelajaran satu semester untuk mata kuliah tertentu.">
<meta name="academic-icon" content="∑">
```

If the metadata is not present, the workflow automatically falls back to:

- Category: `Academic`
- Type: `HTML Resource`
- Description: generated from the HTML `<title>`
- Icon: `▤`

## 📁 Repository Structure

```text
ITL-Trisakti/
├── index.html
├── projects.json
├── README.md
│
├── Analitika Bisnis(3).html
├── Pengantar Manajemen.html
│
└── .github/
    └── workflows/
        └── generate-academic-hub.yml
```

## 🛠️ Local Development

No build system or framework is required.

You can open `index.html` through a local static server.

For example, with VS Code Live Server or Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 🔐 Authentication Note

The official Academic Portal is treated as an external application.

It is **not embedded inside the landing page** because authentication/session handling can be restricted when an application is loaded inside an iframe.

The hub therefore provides a dedicated **Open Academic Portal** button.

## ✨ Design Goals

The hub is intentionally designed to be:

- Professional and institution-oriented
- Lightweight
- Responsive on desktop and mobile
- Easy to maintain
- Searchable
- GitHub Pages compatible
- Automatically expandable as new HTML resources are added

---

**Institut Transportasi dan Logistik Trisakti**  
Academic Digital Hub
