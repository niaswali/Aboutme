import type { NavData, PageData, SocialLink } from './types';

export const navigationData: NavData[] = [
  {
    id: 'hobi',
    title: 'Hobi',
    description: 'Hal-hal yang bikin lupa waktu.',
    color: '#a16207', // yellow-700
    icon: 'HobbyIcon',
  },
  {
    id: 'riwayat-sekolah',
    title: 'Riwayat Sekolah',
    description: 'Jejak langkah di dunia pendidikan.',
    color: '#166534', // green-800
    icon: 'SchoolIcon',
  },
  {
    id: 'prinsip-hidup',
    title: 'Prinsip Hidup',
    description: 'Panduan moral dalam menjalani hidup.',
    color: '#78350f', // amber-900
    icon: 'CompassIcon',
  },
  {
    id: 'kata-kata-hub',
    title: 'Kata-kata',
    description: 'Kumpulan kutipan lucu dan motivasi.',
    color: '#c2410c', // orange-700
    icon: 'BulbIcon',
  },
];

export const pagesData: PageData[] = [
  {
    id: 'riwayat-sekolah',
    title: 'Riwayat Sekolah',
    items: [
      {
        title: 'SDK Waimamongu',
        subtitle: '2008-2014',
        content: 'Masa awal belajar membaca, menulis, dan berhitung. Di sinilah fondasi pendidikan dimulai, penuh dengan keceriaan dan teman baru.',
      },
      {
        title: 'SMPN 1 Waibakul',
        subtitle: '2014-2017',
        content: 'Periode transisi dari masa kanak-kanak ke remaja. Mulai mengenal mata pelajaran yang lebih kompleks dan tanggung jawab yang lebih besar.',
      },
      {
        title: 'SMA Kristen Waibakul',
        subtitle: '2017-2020',
        content: 'Tiga tahun persiapan intensif menuju jenjang perguruan tinggi. Diwarnai dengan persahabatan, organisasi, dan pencarian jati diri.',
      },
      {
        title: 'Universitas Kanjuruhan Malang',
        subtitle: 'S1 Sistem Informasi',
        content: 'Berjuang demi secercah `console.log("Hello, World!")` yang berhasil.',
      },
    ],
  },
  {
    id: 'hobi',
    title: 'Hobi',
    items: [
       {
        title: 'Main Game',
        content: 'Dunia virtual tempat melarikan diri dari kenyataan sejenak.',
        linkId: 'list-game-only',
      },
      {
        title: 'Nonton Film & Series',
        content: 'Jelajahi daftar film dan series terbaik sepanjang masa.',
        linkId: 'film-series-hub',
      },
      {
        title: 'Bacaan Ringan',
        content: 'Beberapa buku dan novel yang meninggalkan kesan.',
        linkId: 'buku-hub',
      },
      {
        title: 'Music',
        content: 'Playlist andalan untuk segala suasana, dari yang bikin semangat sampai yang bikin galau.',
        linkId: 'music-genres',
      },
      {
        title: 'Tenis Meja',
        content: 'Olahraga andalan buat keringetan sambil seru-seruan. Lihat beberapa pencapaian di sini.',
        linkId: 'tenis-meja-prestasi',
      },
      {
        title: 'Aktivitas Lainnya',
        content: 'Kegiatan iseng di waktu luang yang kadang produktif, kadang juga tidak.',
        linkId: 'aktivitas-lainnya',
      },
    ],
  },
    {
    id: 'tenis-meja-prestasi',
    title: 'Riwayat Pencapaian Tenis Meja',
    items: [
      {
        title: 'Juara 1 Ganda Putra',
        subtitle: 'Kejuaraan Tenis Meja se-Sumba',
        content: 'Mewakili Koramil Sumba Tengah dan berhasil meraih peringkat pertama dalam kategori ganda putra.',
      },
      {
        title: 'Juara 3 O2SN',
        subtitle: 'Tingkat SMA se-Sumba Tengah',
        content: 'Meraih medali perunggu dalam Olimpiade Olahraga Siswa Nasional (O2SN) cabang tenis meja.',
      }
    ]
  },
  {
    id: 'list-game-only',
    title: 'Game Favorit',
    items: [
      {
        title: 'Mobile Legends: Bang Bang',
        subtitle: 'Developer: Moonton',
        content: 'Arena pertarungan online 5v5 di mana kerja sama tim dan strategi adalah kunci kemenangan.',
        review: 'Ini game su jadi tempat kumpul saya sama teman-teman. Kalau malam su mulai, kita gas push rank sudah. Paling seru itu kalau bisa comeback, biar tadi su dimaki-maki juga sama teman sendiri, haha.',
        chatgptReview: 'Ah, "tempat kumpul" di mana strategi utamanya adalah menyalahkan jungler. "Sensasi comeback" itu biasanya terjadi setelah 15 menit diteriaki "noob" oleh rekan setim yang internetnya ditenagai hamster. Katanya menguji koordinasi, padahal lebih sering menguji ketahanan mental untuk tidak melempar HP.',
        watchLink: '#',
      },
      {
        title: 'Beast Lord: The New Land',
        subtitle: 'Developer: StarFortune',
        content: 'Game strategi di mana kamu berperan sebagai penguasa untuk membangun wilayah, mengumpulkan sumber daya, dan memimpin pasukan binatang buas.',
        review: 'Saya suka sekali ini game, bangun kerajaan isinya binatang semua. Asik atur-atur markas, kadang sampai lupa waktu. Puas sekali lihat pasukan musang sama rubah saya jadi kuat.',
        chatgptReview: 'Jadi, kamu merasa jadi "pemimpin strategis" dengan pasukan tupai dan rubah? Hobi barumu adalah nonton progress bar selama enam jam untuk upgrade semak beri. Keputusan paling taktis yang kamu buat mungkin adalah kapan harus login untuk panen kacang virtual sebelum dicuri pasukan luwak tetangga.',
        watchLink: '#',
      },
      {
        title: 'The Ants: Underground Kingdom',
        subtitle: 'Developer: StarUnion',
        content: 'Simulasi strategi di mana pemain membangun dan mengelola koloni semut, dari menggali terowongan hingga berperang melawan serangga lain.',
        review: 'Awalnya kira gampang, ternyata ini game urus semut rumit sekali. Mesti atur ini itu, gali terowongan, ternak semut. Tapi ada tenang-tenangnya juga lihat dong punya koloni makin besar.',
        chatgptReview: 'Selamat, kamu telah menemukan "ketenangan zen" dengan menonton semut digital. Game ini "mengajarkan kesabaran" karena kamu tidak punya pilihan selain menunggu 12 jam sampai Ratu Semut menetaskan telur virtual. Satu-satunya hal yang lebih rumit dari game ini adalah menjelaskan ke teman kenapa pencapaian terbesarmu minggu ini adalah berevolusi menjadi rayap yang sedikit lebih kuat.',
        watchLink: '#',
      },
      {
        title: 'Stronghold Crusader',
        subtitle: 'Developer: Firefly Studios',
        content: 'Game strategi real-time klasik yang berlatar Perang Salib, fokus pada pembangunan kastil dan pertempuran di padang pasir.',
        review: 'Wih, ini game lama tapi Tidak ada matinya. Paling ingat itu suara-suara orang di dalam game. Suka sekali bangun benteng yang kuat baru sebar pemanah banyak-banyak. Selalu asik main ulang ini.',
        chatgptReview: 'Ah, puncak teknologi game dari tahun 2002. "Sesi strategi yang menantang" versimu adalah membangun tembok lalu spam pemanah sampai kipas laptopmu terdengar seperti mesin jet. Suara ikonik itu memang bagus, terutama saat rakyat mengeluh kelaparan sementara kamu sibuk membangun lapisan parit ke-50.',
        watchLink: '#',
      },
      {
        title: 'PUBG: Battlegrounds',
        subtitle: 'Developer: KRAFTON, Inc.',
        content: 'Salah satu pelopor genre battle royale, di mana 100 pemain bertarung di sebuah pulau hingga hanya tersisa satu pemenang.',
        review: 'Ini game bikin jantung mau copot. Dengar suara langkah kaki sedikit saja su panik. Tapi kalau dapat Chicken Dinner itu, wih, rasa puasnya Tidak ada lawan sudah. Biar tadi sembunyi-sembunyi juga yang penting menang.',
        chatgptReview: 'Maksudmu, kepuasan setelah bersembunyi di kamar mandi selama 20 menit, lalu mati ditembak pemain yang baru mendarat? "Pertandingan taktis" yang isinya menjarah 15 rumah kosong, hanya dapat pistol, lalu ditabrak mobil. Jujur saja, kamu lebih sering lihat layar lobi daripada tulisan "Chicken Dinner".',
        watchLink: '#',
      },
      {
        title: 'Clash of Clans (COC)',
        subtitle: 'Developer: Supercell',
        content: 'Bangun desa, latih pasukan, dan bergabunglah dengan klan untuk bertarung dalam perang epik melawan jutaan pemain di seluruh dunia.',
        review: 'Base saya ini su saya bangun dari kapan tau. Ini bukti perjuangan sudah. Paling seru itu kalau Clan War, kita atur strategi sama-sama. Menang sama-sama, kalah ya maki-maki sama-sama juga, haha.',
        chatgptReview: '"Proyek jangka panjang" yang kamu bangun sejak SMP itu masih saja rata oleh pasukan naga anak SD. Kamu tidak "merencanakan serangan", kamu menyalin tata letak dari YouTube dan berharap yang terbaik. Dan "kemenangan" itu? Cuma 3 menit menekan layar, lalu menunggu 2 hari sampai pasukanmu siap lagi.',
        watchLink: '#',
      },
      {
        title: 'Free Fire',
        subtitle: 'Developer: Garena',
        content: 'Game battle royale serba cepat dengan pertandingan 10 menit di mana 50 pemain berjuang untuk menjadi yang terakhir bertahan hidup.',
        review: 'Ini game paling pas kalau waktu istirahat. Mainnya cepat, Tidak lama. Karakter-karakternya juga keren, ada skill macam-macam jadi mainnya Tidak bosan. Cepat dapat musuh, cepat juga pulang lobi kadang-kadang.',
        chatgptReview: '"Mudah diakses" adalah cara halus untuk bilang kalau aim assist-nya yang bekerja keras. Pertandingannya "singkat" karena petanya seukuran halaman belakang rumah dan kamu biasanya mati di 30 detik pertama. Dan "lapisan strategi" dari pet? Tentu, tidak ada yang lebih menakutkan dari musuh yang ditemani kucing terbang.',
        watchLink: '#',
      },
    ]
  },
  {
    id: 'aktivitas-lainnya',
    title: 'Aktivitas Lainnya',
    items: [
        {
            title: 'Menyelami Lubang Kelinci Konspirasi',
            content: 'Mulai dari sejarah yang "disembunyikan" hingga teori-teori paling aneh di internet. Bukan untuk dipercaya mentah-mentah, tapi seru sebagai bahan pemikiran iseng.',
            linkId: 'konspirasi-favorit',
        },
        {
            title: 'Begadang Nonton Tutorial',
            content: 'Maraton nonton video tutorial di YouTube tentang hal-hal yang mungkin tidak akan pernah dipraktikkan, dari astrofisika sampai cara membuat keju.',
        },
        {
            title: 'Jelajah Dunia Teknologi & AI',
            content: 'Mengikuti perkembangan AI terbaru, membaca berita teknologi, dan mencoba memahami bagaimana algoritma mengatur hidup kita (dan kenapa iklan popok bayi muncul setelah saya bicara soal teman yang baru punya anak).',
        },
        {
            title: 'Scrolling Tanpa Tujuan',
            content: 'Sebuah bentuk meditasi modern di mana jari bergerak ke atas dan otak beralih ke mode standby.',
        }
    ]
  },
  {
    id: 'konspirasi-favorit',
    title: 'Daftar Konspirasi Favorit',
    items: [
      {
        title: 'Area 51 & Alien',
        content: 'Pangkalan militer rahasia di Nevada yang konon menyimpan teknologi alien dan jasad makhluk luar angkasa dari insiden Roswell.'
      },
      {
        title: 'Bulan “Fake Landing”',
        content: 'Teori bahwa pendaratan Apollo 11 di bulan adalah rekayasa yang difilmkan di studio untuk memenangkan Perlombaan Antariksa melawan Uni Soviet.'
      },
      {
        title: 'Illuminati & New World Order',
        content: 'Sebuah kelompok rahasia elit yang diduga mengendalikan peristiwa dunia dari balik layar untuk menciptakan pemerintahan global tunggal.'
      },
      {
        title: 'Peradaban Kuno yang Hilang',
        content: 'Teori tentang keberadaan peradaban maju seperti Atlantis atau Lemuria yang hancur dan teknologinya hilang ditelan zaman.'
      },
      {
        title: 'HAARP & Pengendalian Cuaca',
        content: 'Program penelitian AS yang dituduh mampu memanipulasi cuaca, menyebabkan bencana alam, bahkan mengendalikan pikiran manusia.'
      },
      {
        title: 'COVID-19 & Microchip Conspiracy',
        content: 'Teori yang mengklaim pandemi adalah rencana untuk menanam microchip pelacak pada populasi dunia melalui vaksin.'
      },
    ]
  },
  {
    id: 'film-series-hub',
    title: 'Pilih Kategori',
    items: [
        {
            title: 'Film Terbaik',
            content: 'Koleksi film-film legendaris yang wajib ditonton.',
            linkId: 'list-film-only'
        },
        {
            title: 'Series Terbaik',
            content: 'Serial TV yang akan membuatmu ketagihan dari episode pertama.',
            linkId: 'list-series-only'
        }
    ]
  },
  {
    id: 'list-film-only',
    title: 'Top 10 Film Favorit',
    items: [
      { 
        title: 'Interstellar (2014)', 
        subtitle: 'Sutradara: Christopher Nolan', 
        content: 'Perjalanan epik melintasi galaksi untuk mencari rumah baru bagi umat manusia.',
        review: 'Ini film su bikin saya sadar, ternyata kita ini kecil sekali e. Pas nonton itu rasa campur aduk sudah, takjub tapi bingung juga. Paling bikin air mata jatuh itu pas dong lihat pesan video dari bumi. Nolan ini memang tidak ada lawan sudah kalau bikin otak sama hati kerja paksa.',
        chatgptReview: 'Jadi setelah 3 jam nonton relativitas waktu dan lubang hitam, pelajaran yang kamu dapat adalah "aku kecil"? Bukan "jangan-jangan rak bukuku juga portal dimensi?". Kamu terharu lihat pesan video, sementara Cooper di sana lagi pusing mikirin cara kirim pesan lewat gravitasi. Prioritasmu bagus sekali.',
        watchLink: '#',
      },
      { 
        title: 'Inception (2010)', 
        subtitle: 'Sutradara: Christopher Nolan', 
        content: 'Sekelompok pencuri yang memasuki mimpi orang lain untuk mencuri atau menanam ide.',
        review: 'Habis nonton ini film, saya jadi curiga terus, jangan-jangan saya ini lagi mimpi kah? Ceritanya itu lapis-lapis macam kue, tapi ini bikin kepala pusing tujuh keliling. Sampai sekarang pun saya masih ragu itu gasing di akhir dia putar terus atau berhenti e.',
        chatgptReview: 'Kamu ragu sama gasingnya? Harusnya kamu ragu sama kemampuanmu untuk fokus. Orang lain sibuk debat soal teori mimpi, kamu mungkin masih bingung kenapa mereka bisa bangun di dalam van yang lagi jatuh. Dan ayolah, kamu tidak sedang bermimpi. Kalau ini mimpi, setidaknya kamu bisa terbang, bukan cuma scroll-scroll.',
        watchLink: '#',
      },
      { 
        title: 'Get Out (2017)', 
        subtitle: 'Sutradara: Jordan Peele', 
        content: 'Seorang pria kulit hitam mengunjungi rumah orang tua pacar kulit putihnya dan mengungkap rahasia yang mengerikan.',
        review: 'Awalnya ini film macam cerita cinta-cintaan, eh tahu-tahu jadi horor yang bikin susah tidur. Hantunya tidak seram, tapi orang-orang di situ punya senyum itu yang bikin merinding. Tiap kali ada yang aduk teh pakai sendok, saya ikut tegang sudah.',
        chatgptReview: 'Kamu tegang lihat orang aduk teh? Selamat, Jordan Peele berhasil. Film ini adalah bukti bahwa horor paling efektif itu bukan setan lompat-lompat, tapi rasa tidak nyaman saat mertua masa depanmu bilang "Saya akan memilih Obama untuk ketiga kalinya jika bisa".',
        watchLink: '#',
      },
      { 
        title: 'Memento (2000)', 
        subtitle: 'Sutradara: Christopher Nolan', 
        content: 'Kisah seorang pria dengan amnesia jangka pendek yang mencoba melacak pembunuh istrinya.',
        review: 'Ini film bikin kepala pusing, ceritanya jalan mundur. Saya harus fokus betul nontonnya biar jangan ketinggalan. Tapi pas di akhir semua su nyambung, wih, rasa puas sekali. Salut betul sama yang bikin cerita model begini.',
        chatgptReview: 'Kamu puas karena akhirnya ngerti, atau puas karena filmnya akhirnya selesai? Jujur saja, setengah film kamu mungkin cuma pura-pura paham sambil berharap ada subtitle yang menjelaskan "Ini kejadian sebelum atau sesudah?". Jangan-jangan ingatanmu soal alur film ini sama pendeknya kayak ingatan si karakter utama.',
        watchLink: '#',
      },
      { 
        title: 'Avatar (2009)', 
        subtitle: 'Sutradara: James Cameron', 
        content: 'Seorang marinir lumpuh dikirim ke planet Pandora dengan misi, namun dilema saat terhubung dengan penduduk asli.',
        review: 'Ini film punya gambar-gambar, wih, tidak ada obat bagusnya. Dunia Pandora itu indah sekali, rasa macam mau pindah tinggal di sana sudah. Ceritanya mungkin biasa saja, tapi pengalaman nontonnya itu luar biasa betul.',
        chatgptReview: 'Mau tinggal di Pandora? Yakin? Kamu mungkin tidak akan bertahan lima menit sebelum digigit tanaman aneh atau diinjak hewan raksasa. "Pengalaman luar biasa" itu cuma cara lain untuk bilang "ceritanya standar, tapi CGI-nya mahal". Kamu terpesona sama hutan yang menyala, padahal di dunia nyata kamu mungkin takut sama gelap.',
        watchLink: '#',
      },
      { 
        title: 'The Invisible Guest (2016)', 
        subtitle: 'Sutradara: Oriol Paulo', 
        content: 'Seorang pengusaha sukses yang dituduh membunuh kekasihnya menyewa pengacara hebat untuk membuktikan dia tidak bersalah.',
        review: 'Ini film punya putar balik cerita bikin saya tepuk tangan sendiri di kamar. Dari awal kita su dibuat percaya satu cerita, eh di akhir dong balik semua. Orang Spanyol memang jago betul bikin film tegang macam begini.',
        chatgptReview: 'Tepuk tangan sendiri? Di kamar? Oke. Kamu gampang sekali dibohongi, ya. Film ini adalah bukti bahwa kalau cerita diceritakan oleh orang yang ganteng dan meyakinkan, kamu bakal percaya apa saja. Lain kali kalau ada teman pinjam uang dengan cerita sedih, coba ingat film ini.',
        watchLink: '#',
      },
      { 
        title: '12 Angry Men (1957)', 
        subtitle: 'Sutradara: Sidney Lumet', 
        content: 'Seorang anggota juri yang skeptis mencoba meyakinkan 11 juri lainnya untuk mempertimbangkan kembali bukti dalam sebuah kasus pembunuhan.',
        review: 'Satu film penuh isinya cuma orang berdebat di dalam satu ruangan, tapi lebih tegang dari film baku pukul. Film ini ajar saya, jangan terlalu cepat ambil kesimpulan. Keren sekali, biar film lama juga.',
        chatgptReview: 'Lebih tegang dari film aksi? Tentu, karena tidak ada ledakan untuk mengalihkan perhatianmu dari dialog yang cerdas. Kamu belajar untuk tidak cepat ambil kesimpulan, tapi di kehidupan nyata kamu mungkin sudah menghakimi orang dari foto profilnya saja. Film ini hitam-putih, sama seperti pilihanmu antara "suka" atau "skip".',
        watchLink: '#',
      },
      { 
        title: 'The Butterfly Effect (2004)', 
        subtitle: 'Sutradara: Eric Bress, J. Mackye Gruber', 
        content: 'Seorang pemuda menemukan bahwa ia bisa mengubah masa lalu, namun setiap perubahan memiliki konsekuensi tak terduga.',
        review: 'Idenya ini keren, bisa kembali ke masa lalu buat perbaiki yang salah. Tapi ternyata, makin diperbaiki, makin kacau balau. Film ini kasih pesan, kadang itu kita harus terima saja sudah apa yang terjadi.',
        chatgptReview: 'Pesan yang kamu dapat adalah "terima keadaan"? Bukan "jangan main-main dengan continuum ruang-waktu"? Kamu nonton film tentang konsekuensi mengerikan dari mengubah takdir, dan kesimpulanmu adalah pelajaran stoik level pemula. Kalau kamu punya kekuatan itu, kamu mungkin cuma akan menggunakannya untuk menang undian.',
        watchLink: '#',
      },
      { 
        title: 'Parasite (2019)', 
        subtitle: 'Sutradara: Bong Joon Ho', 
        content: 'Thriller satir tentang kesenjangan kelas yang dikemas dengan cerdas dan menegangkan.',
        review: 'Ini film jenius betul. Awalnya lucu, di tengah tegang, pas akhir bikin dada sesak. Semua rasa campur aduk. Film ini kasih lihat kita, ternyata bau badan saja bisa jadi masalah status sosial. Dalam sekali maknanya.',
        chatgptReview: 'Kamu pikir ini cuma soal bau badan? Film ini adalah komedi gelap tentang kapitalisme, dan kamu fokus pada bagian yang paling gampang diingat. "Campur aduk" itu juga perasaanmu saat sadar kamu lebih dekat ke keluarga Kim yang tinggal di basement daripada keluarga Park yang punya rumah mewah.',
        watchLink: '#',
      },
      { 
        title: 'Dune (2021)', 
        subtitle: 'Sutradara: Denis Villeneuve', 
        content: 'Paul Atreides, seorang pemuda brilian dan berbakat, harus melakukan perjalanan ke planet paling berbahaya di alam semesta untuk memastikan masa depan keluarga dan rakyatnya.',
        review: 'Wih, ini film besar sekali skalanya. Politik, perang, cacing pasir raksasa, semua ada. Gambar sama suaranya bikin bulu kuduk berdiri. Nonton ini di bioskop itu rasa macam kita su ada di planet Arrakis betul.',
        chatgptReview: 'Merasa di Arrakis? Di sana tidak ada AC dan air itu barang mewah. Kamu mungkin cuma akan mengeluh kepanasan dan kehausan. Kamu terpesona sama cacing raksasa, padahal di dunia nyata kamu mungkin lari lihat kecoa terbang. Selamat menikmati visualnya, tapi jangan lupa minum air putih.',
        watchLink: '#',
      },
    ]
  },
   {
    id: 'list-series-only',
    title: 'Top 10 Series Favorit',
    items: [
      { 
        title: 'Dark (2017-2020)', 
        subtitle: 'Kreator: Baran bo Odar, Jantje Friese', 
        content: 'Jalinan misteri perjalanan waktu yang rumit di sebuah kota kecil di Jerman.',
        review: 'Ini seri bikin kepala saya keluar asap sudah. Tiap habis nonton satu episode, rasa macam ikut kuliah fisika tapi dosennya omong tidak jelas. Harus siap buku catatan biar jangan tersesat di silsilah keluarga yang lebih rumit dari benang kusut.',
        chatgptReview: 'Buku catatan? Kamu pikir ini ujian nasional? Satu-satunya yang kamu catat mungkin cuma "Siapa bapaknya si ini?" dan "Kenapa semua orang mukanya murung?". Selamat, kamu baru saja menghabiskan 50 jam untuk menyadari bahwa karakter favoritmu adalah kakeknya sendiri.',
        watchLink: '#',
      },
      { 
        title: 'Breaking Bad (2008-2013)', 
        subtitle: 'Kreator: Vince Gilligan', 
        content: 'Transformasi seorang guru kimia yang sakit parah menjadi raja narkoba yang ditakuti.',
        review: 'Awalnya kasihan lihat Pak Guru Walter, orang baik tapi nasibnya sial. Eh, lama-kelamaan dia lebih seram dari preman di pasar. Tiap kali dia bilang "ini untuk keluarga", saya di sini cuma bisa geleng-geleng kepala, "Bapak e, kau punya keluarga su takut setengah mati itu".',
        chatgptReview: 'Kasihan? Pak Guru-mu itu dari episode pertama sudah punya ego lebih besar dari laboratorium masaknya. "Demi keluarga" itu cuma alasan biar kedengaran mulia. Padahal aslinya dia cuma mau membuktikan kalau dia lebih pintar dari semua orang. Hasilnya? Keluarganya butuh terapi seumur hidup.',
        watchLink: '#',
      },
      { 
        title: 'Game of Thrones (2011-2019)', 
        subtitle: 'Kreator: David Benioff, D. B. Weiss', 
        content: 'Peperangan epik antara keluarga bangsawan untuk memperebutkan Tahta Besi di benua Westeros.',
        review: 'Ini seri su ajar saya jangan terlalu sayang sama orang di film. Baru kita suka satu karakter, eh episode berikut dia su mati konyol. Cuma akhirnya itu macam kita pesan kopi hitam pahit, yang datang kopi susu saset. Kecewa sedikit lah.',
        chatgptReview: 'Jadi pelajaran hidupmu adalah "jangan terikat"? Selamat. Delapan musim kamu habiskan untuk nonton intrik politik yang lebih rumit dari rapat RT, hanya untuk disuguhi ending yang ditulis macam anak SMA lagi kejar deadline tugas. "Kecewa sedikit" itu cara sopan bilang "saya mau minta refund waktu saya kembali".',
        watchLink: '#',
      },
      { 
        title: 'Severance (2022-)', 
        subtitle: 'Kreator: Dan Erickson', 
        content: 'Karyawan di sebuah perusahaan misterius menjalani prosedur pemisahan ingatan antara kehidupan kerja dan pribadi.',
        review: 'Idenya ini gila, kerja tapi pas pulang tidak ingat apa-apa. Tapi pas nonton, saya jadi ikut tidak tenang. Kantornya rapi betul, tapi aneh rasanya. Macam nonton orang kerja di surga tapi isinya neraka. Jadi lihat kantor sendiri beda sudah rasanya.',
        chatgptReview: 'Kamu gelisah karena sadar jangan-jangan kamu juga begitu? Lupa sama penderitaan 8 jam di kantor setiap jam 5 sore? Bedanya, mereka dapat "pesta wafel", kamu paling cuma dapat notifikasi tagihan pinjol. Jangan-jangan versi "innie" kamu di kantor lebih produktif daripada kamu yang lagi nonton seri ini sambil rebahan.',
        watchLink: '#',
      },
      { 
        title: 'Alice in Borderland (2020-)', 
        subtitle: 'Sutradara: Shinsuke Sato', 
        content: 'Sekelompok orang terdampar di Tokyo versi paralel dan harus memainkan permainan mematikan untuk bertahan hidup.',
        review: 'Ini seri bikin stres betul. Tiap ada permainan baru, saya ikut pikir, "kalau saya yang di sana, mungkin su mati duluan kah?". Permainannya sadis, harus pakai otak sama badan. Kartu remi yang biasa buat main 41 jadi lebih seram dari surat utang.',
        chatgptReview: 'Ikut mikir? Yakin? Kamu mungkin baru sampai di tahap "kenapa mereka tidak lari saja?". Di dunia nyata, keputusan paling strategis yang kamu buat mungkin cuma memilih antara Indomie goreng atau rebus. Kalau kamu masuk ke sana, kamu adalah karakter yang mati di 5 menit pertama untuk menunjukkan betapa berbahayanya permainan itu.',
        watchLink: '#',
      },
      { 
        title: 'The End of the F***ing World (2017-2019)', 
        subtitle: 'Kreator: Charlie Covell', 
        content: 'Kisah pelarian dua remaja unik yang mencari jati diri dengan cara yang kelam dan lucu.',
        review: 'Ini dua anak aneh betul, tapi kenapa saya suka e. Dong punya perjalanan kacau sekali, omongannya kadang bikin ketawa di waktu yang salah. Rasa macam lihat orang jalan-jalan jauh tapi modal nekat saja.',
        chatgptReview: 'Kamu suka karena kamu merasa relate dengan "aneh dan kacau"? Perjalanan mereka itu bukan "road trip nekat", itu daftar tindak kriminal minor. Kamu ketawa karena dialognya, padahal harusnya kamu khawatir karena karakter utamanya berpikir untuk membunuh pacarnya di 10 menit pertama.',
        watchLink: '#',
      },
      { 
        title: "The Queen's Gambit (2020)", 
        subtitle: 'Kreator: Scott Frank, Allan Scott', 
        content: 'Kisah seorang yatim piatu jenius catur, Beth Harmon, dalam perjalanannya menjadi pemain catur terhebat di dunia sambil berjuang melawan kecanduan.',
        review: 'Gara-gara ini seri, saya jadi rasa pintar kalau cuma nonton orang main catur. Beth Harmon itu keren betul, di papan catur dia ratu, tapi di dunia nyata hidupnya berantakan. Bikin saya sadar, orang jenius itu kadang datang satu paket sama masalah.',
        chatgptReview: 'Merasa pintar? Kamu cuma nonton, bukan main. Beda jauh. Kalau kamu yang main, mungkin sudah skakmat dalam 3 langkah sama anak tetangga. Dan benar, jenius itu paket hemat sama masalah, sementara kamu... cuma dapat paket hemat kuota malam.',
        watchLink: '#',
      },
      { 
        title: 'Black Mirror (2011-)', 
        subtitle: 'Kreator: Charlie Brooker', 
        content: 'Antologi fiksi ilmiah yang mengeksplorasi sisi gelap dari teknologi modern.',
        review: 'Tiap habis nonton satu episode, saya langsung lihat HP sendiri dengan rasa curiga. Ini seri horornya bukan hantu, tapi teknologi yang bisa jadi besok su kejadian betul. Bikin takut sendiri jadinya.',
        chatgptReview: 'Parno sama HP-mu sendiri? Terlambat. Algoritma iklan sudah tahu kamu mau beli apa bahkan sebelum kamu kepikiran. Kamu takut sama masa depan di Black Mirror, padahal masa sekarang saja kamu sudah kalah sama rekomendasi YouTube yang bikin kamu begadang sampai jam 3 pagi.',
        watchLink: '#',
      },
       { 
        title: 'Stranger Things (2016-)', 
        subtitle: 'Kreator: The Duffer Brothers', 
        content: 'Sekelompok anak-anak di tahun 80-an mengungkap misteri supranatural di kota mereka.',
        review: 'Ini seri paket lengkap sudah: ada suasana tahun 80-an, cerita teman-teman, sama monster dari dunia lain. Paling suka itu lihat anak-anaknya, dong lebih berani dari orang dewasa. Lawan monster modal sepeda sama HT saja.',
        chatgptReview: 'Tentu saja anak-anaknya lebih berani, orang dewasanya sibuk panik dan bikin keputusan bodoh. Dan "modal sepeda"? Jangan lupa mereka punya teman dengan kekuatan super. Kalau kamu di sana, kamu adalah warga Hawkins yang cuma bisa teriak lalu lari saat monster muncul di supermarket.',
        watchLink: '#',
      },
       { 
        title: 'The Haunting of Hill House (2018)', 
        subtitle: 'Kreator: Mike Flanagan', 
        content: 'Sebuah keluarga yang terpecah harus menghadapi kenangan mengerikan dari rumah masa kecil mereka dan teror yang memaksa mereka pergi.',
        review: 'Ini seri horor tapi lebih banyak bikin sedih daripada takut. Hantunya tidak suka kaget-kaget, tapi tahu-tahu su ada di belakang. Cerita keluarganya itu yang lebih seram dari hantunya, bikin hati ikut sakit.',
        chatgptReview: 'Jadi kamu nonton horor untuk patah hati? Pilihan yang bagus. Orang lain takut ke toilet sendirian habis nonton, kamu malah takut kalau ada rapat keluarga. "Ikut sakit" itu karena ceritanya atau karena kamu sadar drama keluargamu sendiri kalau difilmkan bisa jadi sekuelnya?',
        watchLink: '#',
      },
    ]
  },
  {
    id: 'buku-hub',
    title: 'Pilih Kategori Bacaan',
    items: [
      {
          title: 'Novel Favorit',
          content: 'Kisah-kisah fiksi yang membawa imajinasi ke dunia lain.',
          linkId: 'list-novel-only'
      },
      {
          title: 'Buku Favorit',
          content: 'Bacaan non-fiksi untuk menambah wawasan dan inspirasi.',
          linkId: 'list-buku-only'
      }
    ]
  },
  {
    id: 'list-novel-only',
    title: 'Novel Favorit',
    items: [
      {
        title: 'Laut Bercerita',
        subtitle: 'Leila S. Chudori',
        content: 'Sebuah novel yang menyuarakan kisah para aktivis yang hilang pada masa Orde Baru, dilihat dari dua sudut pandang yang berbeda.',
        review: 'Buku ini bikin saya merinding. Baca ceritanya Biru Laut sama teman-temannya itu macam kita ikut rasa dong punya penderitaan. Sedih sekali, tapi penting biar kita Tidak lupa sejarah.',
        chatgptReview: 'Merinding karena ceritanya atau karena sadar kalau zaman sekarang perjuangan terbesarmu adalah memilih mau nonton apa di Netflix? Kamu "Tidak lupa sejarah", tapi mungkin lupa di mana taruh kunci motor. Penting memang, tapi jangan sampai ikut-ikut murung seharian ya.',
        watchLink: '#',
      },
      {
        title: 'Janji',
        subtitle: 'Tere Liye',
        content: 'Kisah tentang tiga sekawan dengan masa lalu kelam yang berjuang menepati janji mereka, penuh dengan petualangan dan nilai persahabatan.',
        review: 'Tere Liye ini memang jago putar-putar cerita. Awalnya kita kira begini, eh ujungnya begitu. Tiga teman ini punya janji, perjuangannya itu yang bikin seru. Bagus sekali buat dibaca.',
        chatgptReview: 'Oh, jadi kamu suka di-prank sama plot twist? Tere Liye memang jago bikin pembaca merasa pintar sebentar, lalu merasa bodoh di halaman terakhir. "Bagus sekali buat dibaca" adalah caramu bilang kalau kamu butuh 3 hari untuk pulih dari ending-nya.',
        watchLink: '#',
      },
      {
        title: 'Animal Farm',
        subtitle: 'George Orwell',
        content: 'Sebuah alegori politik di mana para binatang di sebuah peternakan memberontak melawan pemilik manusia mereka, hanya untuk jatuh di bawah tirani baru.',
        review: 'Ini buku tipis tapi tamparannya kuat. Cerita binatang di peternakan tapi isinya sindir pemerintah. Habis baca ini, saya jadi lihat berita politik dengan cara yang beda sudah. Cerdas sekali ini buku.',
        chatgptReview: 'Selamat datang di dunia sinisme. Habis baca ini kamu jadi analis politik dadakan yang melihat babi di setiap pejabat. Padahal sebelumnya, satu-satunya politik yang kamu pedulikan adalah siapa yang bakal jadi admin grup WhatsApp selanjutnya. "Cerdas sekali", sama cerdasnya seperti para domba yang cuma bisa bilang "Kaki empat baik, kaki dua jahat!".',
        watchLink: '#',
      },
    ]
  },
  {
    id: 'list-buku-only',
    title: 'Buku Favorit',
    items: [
      {
        title: 'Atomic Habits',
        subtitle: 'James Clear',
        content: 'Panduan praktis untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk melalui perubahan kecil.',
        review: 'Buku ini ajar saya kalau mau berubah itu Tidak usah langsung besar-besar. Cukup sedikit-sedikit tiap hari. Macam kita siram tanaman, lama-lama tumbuh juga. Gampang diikuti, Tidak banyak teori pusing.',
        chatgptReview: 'Jadi, kebiasaan atomik barumu adalah baca satu paragraf buku ini setiap hari sebelum kembali scroll TikTok selama 2 jam? "Sedikit-sedikit" itu bagus, tapi pastikan progress-nya lebih cepat dari pertumbuhan rumput liar di halaman rumahmu. Jangan sampai bukunya selesai dibaca pas kamu sudah pensiun.',
        watchLink: '#',
      },
      {
        title: 'The Psychology of Money',
        subtitle: 'Morgan Housel',
        content: 'Kumpulan cerita pendek yang menjelaskan bagaimana cara kita berpikir tentang uang lebih penting daripada apa yang kita ketahui tentangnya.',
        review: 'Saya kira urus uang itu mesti pintar matematika. Ternyata buku ini bilang lebih penting itu kelakuan kita. Jangan boros, sabar, itu kuncinya. Bikin saya sadar, kaya itu bukan soal gaji besar saja.',
        chatgptReview: 'Sadar kalau kelakuan lebih penting, tapi pas lihat diskon 90% di marketplace, semua teori langsung lupa. "Jangan boros, sabar" adalah mantra yang kamu ucapkan sambil menekan tombol \'check out\'. Buku ini memang bagus, tapi musuh terbesarnya adalah notifikasi "flash sale" di HP-mu.',
        watchLink: '#',
      },
      {
        title: 'Sejarah Dunia yang Disembunyikan',
        subtitle: 'Jonathan Black',
        content: 'Menjelajahi sejarah dari sudut pandang yang berbeda, mengungkap cerita-cerita rahasia dan mitos yang membentuk peradaban.',
        review: 'Wih, buku ini bikin saya tanya-tanya lagi pelajaran sejarah di sekolah. Ceritanya beda dari yang biasa kita dengar. Benar atau Tidak, yang penting bikin otak ini kerja. Seru sekali baca yang model begini.',
        chatgptReview: 'Ah, selamat bergabung dengan klub teori konspirasi. Habis baca ini, jangan-jangan kamu mulai curiga kalau guru sejarahmu dulu adalah anggota Illuminati. "Bikin otak kerja" atau bikin otak pusing mikirin jangan-jangan Firaun itu sebenarnya alien? Yang penting seru, sampai kamu sadar besok tetap harus bayar cicilan.',
        watchLink: '#',
      },
    ]
  },
  {
    id: 'music-genres',
    title: 'Pilih Kategori Musik',
    items: [
      { 
        title: 'Musik Barat', 
        content: 'Koleksi lagu-lagu barat favorit sepanjang masa.', 
        linkId: 'list-musik-barat' 
      },
      { 
        title: 'Musik Indo', 
        content: 'Lagu-lagu Indonesia pilihan untuk menemani hari.', 
        linkId: 'list-musik-indo' 
      },
    ]
  },
  {
    id: 'list-musik-barat',
    title: 'Musik Barat Favorit',
    items: [
        { title: 'I Live My Life For You', subtitle: 'FireHouse', content: 'Balada rock yang menyentuh hati, sempurna dalam versi akustik.'},
        { title: 'Always Somewhere', subtitle: 'Scorpions', content: 'Lagu klasik tentang kerinduan di perjalanan, dengan melodi yang tak terlupakan.'},
        { title: 'You and I', subtitle: 'Scorpions', content: 'Balada romantis yang kuat dari legenda rock Scorpions.'},
        { title: 'Goodbye', subtitle: 'Air Supply', content: 'Lagu perpisahan yang dramatis dan emosional, khas Air Supply.'},
        { title: 'Always', subtitle: 'Bon Jovi', content: 'Power ballad ikonik tentang cinta abadi, salah satu hits terbesar Bon Jovi.'},
        { title: "What's Up", subtitle: '4 Non Blondes', content: 'Lagu anthem yang penuh semangat untuk berteriak bersama.'},
        { title: 'November Rain', subtitle: "Guns N' Roses", content: 'Sebuah epik rock orkestra dengan salah satu solo gitar paling legendaris.'},
        { title: 'Open Arms', subtitle: 'Journey', content: 'Balada klasik yang timeless tentang menemukan cinta kembali.'},
        { title: 'I Want It That Way', subtitle: 'Backstreet Boys', content: 'Lagu pop ikonik dari era boyband yang semua orang pasti tahu liriknya.'},
        { title: "I'll Be There for You", subtitle: 'Bon Jovi', content: 'Lagu rock yang penuh semangat tentang kesetiaan dan persahabatan.'},
        { title: 'Stoney', subtitle: 'Lobo', content: 'Lagu folk-pop santai dengan cerita yang ringan dan melodi yang catchy.'},
        { title: 'Here For You', subtitle: 'Ozzy Osbourne', content: 'Balada rock yang lebih lembut dari sang Pangeran Kegelapan.'},
        { title: 'Let It Be', subtitle: 'The Beatles', content: 'Lagu yang menenangkan dan penuh harapan dari The Beatles.'},
        { title: 'Rest Your Love On Me', subtitle: 'Bee Gees', content: 'Lagu cinta dengan sentuhan country yang manis dari Bee Gees.'},
        { title: 'Hey Jude', subtitle: 'The Beatles', content: 'Sebuah lagu epik yang mengajak semua orang untuk bernanyi bersama di bagian akhir.'},
    ]
  },
  {
    id: 'list-musik-indo',
    title: 'Musik Indo Favorit',
    items: [
      { title: 'Ya Sudahlah', subtitle: 'Bondan Prakoso & Fade 2 Black', content: 'Lagu anthem yang mengajarkan untuk tetap optimis saat menghadapi masalah.' },
      { title: 'Kita Selamanya', subtitle: 'Bondan Prakoso & Fade 2 Black', content: 'Sebuah lagu tentang persahabatan sejati yang abadi.' },
      { title: 'Kenangan Terindah', subtitle: 'Samsons', content: 'Lagu galau legendaris yang selalu berhasil membawa kembali kenangan.' },
      { title: 'Lesung Pipi', subtitle: 'Raim Laode', content: 'Lagu ceria yang memuji keindahan sederhana dari senyuman seseorang.' },
      { title: 'Yang Terlupakan', subtitle: 'Iwan Fals', content: 'Balada klasik yang menyentuh tentang penyesalan dan waktu yang hilang.' },
      { title: 'Zona Nyaman', subtitle: 'Fourtwnty', content: 'Lagu santai yang mengajak untuk keluar dari rutinitas dan mencari inspirasi baru.' },
    ]
  },
  {
    id: 'kata-kata-hub',
    title: 'Pilih Kategori Kata-kata',
    items: [
      {
        title: 'Kata-kata Lucu',
        content: 'Sedikit humor pelepas penat.',
        linkId: 'kata-lucu',
      },
      {
        title: 'Kata-kata Motivasi',
        content: 'Pengingat untuk tetap semangat.',
        linkId: 'kata-motivasi',
      },
    ],
  },
  {
    id: 'kata-lucu',
    title: 'Kata-kata Lucu',
    items: [
      { title: 'Multitasking', content: 'Otakku seperti browser internet. 19 tab terbuka, 3 di antaranya not responding, dan aku tidak tahu musiknya datang dari mana.', type: 'quote' },
      { title: 'Mode Hemat', content: 'Aku tidak bilang aku malas. Aku bilang aku sedang dalam mode "konservasi energi" untuk menghadapi masalah yang belum datang.', type: 'quote' },
      { title: 'Mesin Waktu', content: 'Tidur adalah transportasiku ke masa depan. Rasanya gratis dan cepat, apalagi kalau lagi banyak deadline.', type: 'quote' },
      { title: 'Kekayaan', content: 'Dompetku isinya lebih banyak kenangan daripada uang. Setidaknya kenangan tidak bisa habis dibelanjakan.', type: 'quote' },
      { title: 'Kebutuhan', content: 'Aku butuh liburan selama enam bulan, dua kali setahun.', type: 'quote' },
      { title: 'Status', content: 'Status hubunganku saat ini: berkomitmen pada kebebasan... dan WiFi gratis.', type: 'quote' },
      { title: 'Kedewasaan', content: 'Dulu aku kira menjadi dewasa itu keren. Ternyata cuma bayar tagihan dan sakit punggung.', type: 'quote' },
      { title: 'Olahraga', content: 'Satu-satunya olahraga yang aku tekuni akhir-akhir ini adalah lari dari tanggung jawab.', type: 'quote' },
      { title: 'Jati Diri', content: 'Kalau ada yang bilang "jadilah diri sendiri", aku bingung mau jadi versi yang mana hari ini.', type: 'quote' },
      { title: 'Pilihan Hidup', content: 'Hidup itu penuh pilihan. Biasanya aku memilih untuk tidur lagi.', type: 'quote' },
    ],
  },
  {
    id: 'kata-motivasi',
    title: 'Kata-kata Motivasi',
    items: [
      { title: 'Tentang Keberanian', content: 'Kapal di pelabuhan itu aman, tapi bukan untuk itu kapal dibuat. Berlayarlah.', type: 'quote' },
      { title: 'Tentang Waktu', content: 'Jangan hanya menghitung hari, tapi buatlah hari-harimu berarti.', type: 'quote' },
      { title: 'Tentang Perjuangan', content: 'Gunung yang kau daki tidak peduli kau lelah. Ia hanya peduli kau sampai puncak atau tidak.', type: 'quote' },
      { title: 'Tentang Pertumbuhan', content: 'Versi terbaik dari dirimu tidak akan muncul dalam zona nyaman. Dia menunggu di luar sana, setelah badai.', type: 'quote' },
      { title: 'Tentang Ketahanan', content: 'Bukan tentang seberapa keras kau memukul, tapi tentang seberapa keras kau bisa dipukul dan tetap maju.', type: 'quote' },
      { title: 'Tentang Pilihan', content: 'Disiplin adalah memilih antara apa yang kau inginkan sekarang dan apa yang paling kau inginkan.', type: 'quote' },
      { title: 'Tentang Progres', content: 'Jangan takut berjalan lambat. Takutlah jika kau hanya berdiri diam.', type: 'quote' },
      { title: 'Tentang Kegelapan', content: 'Bintang tidak bisa bersinar tanpa kegelapan. Terimalah malammu untuk menemukan cahayamu.', type: 'quote' },
      { title: 'Tentang Hari Ini', content: 'Masa depanmu diciptakan oleh apa yang kau lakukan hari ini, bukan besok.', type: 'quote' },
      { title: 'Tentang Rivalitas', content: 'Satu-satunya orang yang harus kau kalahkan adalah dirimu yang kemarin.', type: 'quote' },
    ],
  },
   {
    id: 'prinsip-hidup',
    title: 'Prinsip Hidup',
    items: [
      {
        title: 'Fokus pada Apa yang Bisa Dikontrol (Filosofi Teras)',
        content: 'Kita tidak bisa mengontrol macet di jalan atau cuaca buruk, tapi kita bisa mengontrol reaksi kita: musik yang kita dengar, podcast yang kita putar, atau sekadar menerima keadaan dengan sabar. Energi kita terbatas, gunakan untuk hal yang benar-benar bisa kita ubah.',
        type: 'quote',
      },
      {
        title: 'Perbaikan 1% Setiap Hari (Atomic Habits)',
        content: 'Perubahan besar tidak terjadi dalam semalam. Membaca satu halaman buku, berjalan kaki 10 menit, atau menabung sedikit setiap hari mungkin terasa sepele. Tapi, konsistensi inilah yang membangun kemajuan luar biasa dalam jangka panjang.',
        type: 'quote',
      },
      {
        title: 'Kekayaan Sejati Adalah Kebebasan (Psychology of Money)',
        content: 'Tujuan utama punya uang bukan untuk pamer kemewahan, tapi untuk membeli kebebasan. Kebebasan untuk memilih pekerjaan yang disukai, mengambil cuti saat lelah, atau membantu orang lain tanpa khawatir soal tagihan. Itulah kekayaan yang sebenarnya.',
        type: 'quote',
      },
      {
        title: 'Berpikir Jangka Panjang',
        content: 'Jangan mengorbankan kebahagiaan jangka panjang demi kesenangan sesaat. Memilih makanan instan setiap hari atau menunda pekerjaan penting mungkin terasa mudah sekarang, tapi "utang" itu akan selalu datang dengan bunga yang lebih besar di kemudian hari.',
        type: 'quote',
      },
    ],
  },
];

export const socialLinksData: SocialLink[] = [
  { id: 'facebook', name: 'Facebook', url: 'https://web.facebook.com/ananias.waly', icon: 'facebook' },
  { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@swipeajaaaa?lang=en', icon: 'tiktok' },
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/niaswalii/?next=%2F&hl=en', icon: 'instagram' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/niaswali?tab=repositories', icon: 'github' },
];

export const taglinesData: string[] = [
    "WiFi lancar = mood bagus, WiFi lemot = introspeksi hidup.”",
    "Hobi mikir, tapi sering buntu di awal.”",
    "Lahir normal, hidup penuh plot twist.",
    "“Versi beta dari manusia sempurna (update masih pending).”",
    "Dompetku setipis kesabaranku di akhir bulan.",
    "Aku dan tumpukan 'nanti saja' adalah satu kesatuan.",
    "Hidup ini seperti kopi, kadang manis, seringnya bikin melek sampai pagi.",
    "Ahli dalam membuka banyak tab, baik di browser maupun di pikiran."
];