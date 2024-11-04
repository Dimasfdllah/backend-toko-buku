[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/rJt1dJdT)

# Tugas Week 8 - Backend Development

## Deskripsi

Pak Mulyono punya sebuah toko buku bernama "Markas Baca".Bisnis pak mul ini sudah berjalan sekitar kurang lebih 20 tahun dan sekarang beliau ingin untuk mengembankan bisnis nya kearah digital agar tetap eksis di pasaran.Pak mul memintamu untuk membuat sebuah aplikasi untuk mendukung salah satu kegiatan operasional nya dalam hal peminjaman buku,kamu diminta untuk membuat sebuah aplikasi manajemen peminjaman buku yang untuk membantu pencatatan peminjaman buku.Pak Mulyono ingin aplikasi ini mempunyai sebuah fitur sebagai berikut :

- Fitur pengelolaan Kategori buku
- Fitur pengelolaan data penulis buku
- Fitur pengelolaan data buku
- Fitur penglolaan peminjaman buku
- Fitur kalkulasi denda apabila telat dalam mengembalikan buku
- Fitur untuk menajemen stok buku (opsional)

Sebagai seorang backend engineer kamu diminta untuk mengembangkan aplikasi sesuai dengan brief fitur diatas, buatlah sesimpel mungkin tetapi menjawab semua permintaan pak mulyono.

## API Specs

berikut ini adalah api specs yang harus dibuat :

- **Books**

| Method | Endpoint     | Description                      |
| ------ | ------------ | -------------------------------- |
| GET    | /books       | Untuk mendapatkan list buku      |
| GET    | /book/:id    | untuk mendapatkan detail buku    |
| POST   | /book        | untuk menambahkan data buku baru |
| PUT    | /book/:id    | untuk mengupdate buku            |
| DELETE | /book/:id    | untuk menghapus buku             |
| POST   | /book/upload | untuk mengupload sampul buku     |

- **Author**

| Method | Endpoint       | Description                        |
| ------ | -------------- | ---------------------------------- |
| GET    | /authors       | Untuk mendapatkan list author      |
| GET    | /author/:id    | untuk mendapatkan detail author    |
| POST   | /author        | untuk menambahkan data author baru |
| PUT    | /author/:id    | untuk mengupdate author            |
| DELETE | /author/:id    | untuk menghapus author             |
| POST   | /author/upload | untuk mengupload foto author       |

- **Category**

| Method | Endpoint      | Description                          |
| ------ | ------------- | ------------------------------------ |
| GET    | /categories   | Untuk mendapatkan list kategori      |
| GET    | /xategory/:id | untuk mendapatkan detail kategori    |
| POST   | /xategory     | untuk menambahkan data kategori baru |
| PUT    | /xategory/:id | untuk mengupdate kategori            |
| DELETE | /xategory/:id | untuk menghapus kategori             |

- **Peminjam**

| Method | Endpoint      | Description                          |
| ------ | ------------- | ------------------------------------ |
| GET    | /borrowers    | Untuk mendapatkan list peminjam      |
| GET    | /borrower/:id | untuk mendapatkan detail peminjam    |
| POST   | /borrower     | untuk menambahkan data peminjam baru |
| PUT    | /borrower/:id | untuk mengupdate peminjam            |
| DELETE | /borrower/:id | untuk menghapus peminjam             |

- **Pinjam Buku**

| Method | Endpoint            | Description                                                |
| ------ | ------------------- | ---------------------------------------------------------- |
| POST   | /borrow/book        | Untuk menambahkan data peminjam buku                       |
| GET    | /borrow/book/list   | untuk mendapatkan list data peminjam buku yang masih aktif |
| POST   | /borrow/book/return | untuk menambahkan data pengembalian buku                   |

## Ketentuan Project

- Wajib menggunakan stack nodejs express & mongodb (diluar stack ini tidak diperbolehkan apapun alasanya)
- API Endpoint wajib mengikuti specs diatas (boleh di tambah endpoint lain apabila dirasa kurang)
- Menerapkan konsep MVC arsitektur
- API Menerapkan CORS
- Wajib mengumpulkan dokumentasi (minimal link postman)

## Poin Tambah

- Nilai tambah apabila dapat mengimplementasikan stock manajemen dalam buku beserta logs nya
- Nilai tambah apabila menerapkan ACID transaction
- Nilai tambah apabila dapat menuliskan dokumentasi dengan rapi dan jelas

## Cara Menjalankan Project

Untuk menjalankan project ini kalian bisa jalankan command line berikut ini :

```
npm run start
```

kemudian bisa akses url dibawah ini :

```
http://localhost:3000/api/v1/test/health
```

## Link Dokumentasi API postman

https://web.postman.co/workspace/51714d30-73d0-4766-8aa6-b038622e76f4/documentation/39454883-3524139a-ed89-49e1-a5ab-e5fbb5c33ac3
