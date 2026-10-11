// Data produk (studi kasus: e-commerce HP & tablet termurah). Harga hanya contoh.
// Gambar: isi 'image' dengan nama file di public/images/ (mis. 'images/redmi-a3.png'),
// atau biarkan null lalu edit lewat tombol Edit di aplikasi (upload file / URL).
export const CATEGORIES = ['all', 'phone', 'tablet']

const p = (id, name, category, price, specs, available, badge, features, image = null) =>
  ({ id, image, name, category, price, specs, available, badge, features })

export const PRODUCTS = [
  p(1, 'Redmi Note 17 5G', 'phone', 4299000, '6GB / 128GB · 6.99"', true, 'Terlaris', ['7700mAh', 'Layar AMOLED 120Hz', 'Snapdragon 4 Gen 4', 'Garansi 2 tahun'], 'images/redmi-note-17.png'),
  p(2, 'Infinix Note 60 5G', 'phone', 3899000, '8GB / 256GB · 6.78"', true, 'Best Value', ['6500mAh', 'Layar AMOLED 144Hz', 'Dimensity 7400 Ultimate', 'Wireless Charging', 'Garansi 1 tahun'], 'images/infinix-note-60.png'),
  p(3, 'Samsung Galaxy A37', 'phone', 6599000, '8GB / 128GB · 6.7"', true, 'Jangka Panjang', ['5000mAh', 'Layar Super AMOLED 120HZ', 'Exynos 1480', 'Garansi resmi SEIN'], 'images/samsung.png'),
  p(4, 'Tecno Pova 8 5G', 'phone', 4299000, '6GB / 128GB · 6.76"', true, 'Baterai Badak', ['8000mAh', 'Layar IPS LCD 144Hz', 'Dimensity 7100', 'Garansi 1 tahun'], 'images/tecno-pova-8.png'),
  p(5, 'Realme 16', 'phone', 3999000, '8GB / 256GB · 6.57"', true, 'HP Selfie Terbaik', ['7000mAh', 'Layar AMOLED 120Hz', 'Dimensity 6400 Turbo', 'Garansi 1 tahun'], 'images/realme-16.png'),
  p(6, 'Infinix Xpad 30 Pro', 'tablet', 3399000 , '4GB / 128GB · 11"', true, null, ['8200mAh', 'Layar TFT LCD 90Hz', 'Helio G200 Ultimate', 'Garansi 1 tahun'], 'images/infinix-xpad-30-pro.png'),
  p(7, 'Redmi Pad 2', 'tablet', 2999000, '4GB / 128GB · 11"', true, 'Populer', ['9000mAh', 'Layar 90Hz', 'Helio G100 Ultra', 'Garansi 1 tahun'], 'images/redmi-pad-2.png'),
]
