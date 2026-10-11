# Laporan Proyek: NusaPhone Shop

**Nama:** [isi]  **Program Studi:** [isi]  **Mata Kuliah:** Pemrograman Web

## 1. Deskripsi Proyek
NusaPhone Shop adalah prototipe e-commerce HP dan tablet termurah. Pengguna dapat menelusuri produk, memfilter kategori, mencari, mengurutkan dari harga termurah, memasukkan ke keranjang, memakai kode promo, dan checkout simulasi (QRIS). Setiap produk memiliki gambar yang dapat diedit (upload/URL) lewat Mode Edit. Aplikasi mendukung bahasa ID/EN dan mode gelap/terang.

## 2. Tech Stack
- React 19 (function component + hooks)
- Vite (bundler & dev server)
- CSS murni dengan CSS variables untuk theming
- oxlint (linter)
- localStorage (menyimpan hasil edit produk/gambar)
- GitHub + GitHub Actions / Vercel (deployment)

## 3. Penerapan Konsep yang Diwajibkan
### 3.1 React Component
NoticeBar, Navbar, Hero, ProductSection, CategoryFilter, ProductCard, ProductEditor, WhyChooseUs, CartDrawer, CheckoutModal, Footer.
> *[Screenshot struktur folder `src/components`]*

### 3.2 Passing Props to Component
`ProductSection` mengirim `product`, `isCheapest`, `onEdit` ke `ProductCard`; `categories`, `active`, `onChange` ke `CategoryFilter`; `ProductEditor` menerima `product` dan `onClose`.
> *[Screenshot kode + kartu produk]*

### 3.3 Conditional Rendering
Badge "Termurah", tombol "Stok habis/Di keranjang", gambar atau placeholder, tombol Edit hanya saat Mode Edit, keranjang kosong, form checkout vs layar sukses.
> *[Screenshot: stok habis, Mode Edit aktif, keranjang kosong, layar sukses]*

### 3.4 useState
Kategori aktif, pencarian, urutan harga, produk yang diedit, kode promo, form checkout.
> *[Screenshot filter, pencarian, dan urutan harga]*

### 3.5 useContext
`SettingsContext` (bahasa, tema, mode edit), `CartContext` (keranjang, promo, total), `ProductsContext` (daftar produk + gambar yang diedit).
> *[Screenshot pergantian bahasa/tema, edit gambar, keranjang dengan diskon]*

## 4. Hasil dan Bukti Tangkapan Layar
> *[Beranda, daftar produk, edit gambar sebelum/sesudah, keranjang + promo, checkout, sukses, mode terang, bahasa Inggris]*

## 5. Kesimpulan
Seluruh konsep wajib (component, props, conditional rendering, useState, useContext) diterapkan dalam satu aplikasi yang berjalan dan dipublikasikan.

## 6. Lampiran
- **Publish URL:** *[isi setelah deploy]*
- **GitHub Repo:** *[isi setelah push]*
