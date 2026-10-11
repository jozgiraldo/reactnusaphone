export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')

// Gambar bisa berupa file di public/images, URL luar, atau data URL (hasil upload)
export const imgSrc = (src) => (/^(https?:|data:)/.test(src) ? src : import.meta.env.BASE_URL + src)

// Perkecil gambar upload (maks 640px, JPEG) agar muat di localStorage
export const compressImage = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const s = Math.min(1, 640 / img.width)
        const c = document.createElement('canvas')
        c.width = img.width * s
        c.height = img.height * s
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height)
        resolve(c.toDataURL('image/jpeg', 0.8))
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
