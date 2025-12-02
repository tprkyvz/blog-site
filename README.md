# Blog Sitesi

Bu proje, Next.js kullanılarak geliştirilmiş kişisel bir blog sitesidir. Toprak'ın kişisel blogu, özgeçmişi ve iletişim bilgilerini içerir.

## Özellikler

*   **Next.js App Router**: Modern ve hızlı sayfa yönlendirmesi.
*   **TypeScript**: Tip güvenliği ve daha iyi geliştirme deneyimi.
*   **Markdown Desteği**: Blog yazıları markdown formatında yazılabilir ve dinamik olarak listelenir.
*   **Duyarlı Tasarım**: Mobil ve masaüstü cihazlarla uyumlu arayüz.

## Gereksinimler

Bu projeyi çalıştırmak için bilgisayarınızda aşağıdakilerin kurulu olması gerekir:

*   [Node.js](https://nodejs.org/) (Sürüm 18 veya üzeri önerilir)
*   npm (Node.js ile birlikte gelir)

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  Projeyi klonlayın (veya indirin):
    ```bash
    git clone https://github.com/kullaniciadi/blog-site.git
    cd blog-site
    ```

2.  Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```

## Çalıştırma

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Komutu çalıştırdıktan sonra tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek siteyi görüntüleyebilirsiniz.

## Canlı Ortam İçin Derleme

Projeyi canlı ortam (production) için derlemek ve çalıştırmak isterseniz:

```bash
npm run build
npm start
```

## Proje Yapısı

*   `app/`: Sayfalar ve routing işlemleri (Next.js App Router).
*   `content/`: Markdown formatındaki blog yazıları.
*   `lib/`: Yardımcı fonksiyonlar (örneğin markdown işleme).
*   `public/`: Statik dosyalar (resimler vb.).

## Kullanılan Teknolojiler

*   [Next.js](https://nextjs.org/) - React Framework
*   [React](https://react.dev/) - UI Kütüphanesi
*   [TypeScript](https://www.typescriptlang.org/) - Programlama Dili
*   [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Markdown metadata ayrıştırıcı
*   [Remark](https://github.com/remarkjs/remark) - Markdown işleyici
*   [React Icons](https://react-icons.github.io/react-icons/) - İkon seti

---
Bu proje [Toprak](https://github.com/topraky) tarafından geliştirilmiştir.