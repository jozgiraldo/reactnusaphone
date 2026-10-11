# NusaPhone Shop – E-commerce HP & Tablet Termurah

Prototipe toko HP & tablet termurah (terinspirasi alur shop.pandorahub.net) dibuat dengan React + Vite untuk tugas pemrograman web.

## Konsep React yang diterapkan
| Konsep | Lokasi |
|---|---|
| React Component | `src/components/*` (NoticeBar, Navbar, Hero, ProductSection, ProductCard, ProductEditor, CartDrawer, CheckoutModal, dst.) |
| Passing Props | `ProductCard` (`product`, `isCheapest`, `onEdit`), `CategoryFilter` (`categories`, `active`, `onChange`), `ProductEditor` (`product`, `onClose`), `CheckoutModal` (`onClose`) |
| Conditional Rendering | Badge "Termurah", tombol "Stok habis/Di keranjang", gambar vs placeholder, tombol Edit hanya di Mode Edit, keranjang kosong, form vs layar sukses |
| useState | Kategori, pencarian, urutan harga, produk yang diedit, kode promo, form checkout |
| useContext | `SettingsContext` (bahasa, tema, mode edit), `CartContext` (keranjang, promo, total), `ProductsContext` (produk + gambar yang bisa diedit) |

## Gambar produk yang bisa diedit
Klik **✎ Mode edit** di navbar, lalu **Edit gambar & data** pada kartu produk: upload file, tempel URL gambar, atau kembalikan gambar awal. Perubahan tersimpan di `localStorage` browser.
Gambar bawaan juga bisa diisi lewat `src/data/products.js` (`image: 'images/nama.png'`, file di `public/images/`).

## Menjalankan
```bash
npm install
npm run dev     # pengembangan
npm run build   # hasil di folder dist
```
Kode promo uji coba: `MERDEKA17` (diskon 17%). Harga produk hanya contoh data.

## Deploy
- **Vercel:** import repo di vercel.com (Vite terdeteksi otomatis).
- **GitHub Pages:** push ke `main`, lalu Settings > Pages > Source: *GitHub Actions* (`.github/workflows/deploy.yml`).
