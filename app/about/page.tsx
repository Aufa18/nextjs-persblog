import { profileData } from '@/data/blogData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto pt-10 pb-20 px-4">
      {/* Tombol Kembali ke Home */}
      <Link 
        href="/" 
        className="text-sm text-foreground/50 hover:text-foreground mb-8 inline-block transition-colors"
      >
        ← Back to feed
      </Link>

      {/* Profil Utama (Gaya Zangwei / Rata Kiri) */}
      <div className="flex flex-col items-start text-left mb-10">
        <div className="w-24 h-24 bg-foreground/5 rounded-full mb-5 flex items-center justify-center overflow-hidden border border-border shadow-sm">
          <span className="text-4xl">🧑🏻‍💻</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground font-cormorant mb-1">
          About {profileData.name}
        </h1>
        
        <p className="text-sm font-medium text-foreground/60 mb-6 uppercase tracking-wider">
          {profileData.role}
        </p>

        {/* Deskripsi Diri Panjang */}
        <div className="text-foreground/90 leading-relaxed space-y-4 text-base">
          <p>
            Halo! Saya {profileData.name}. {profileData.bio} Saya memiliki gairah yang besar dalam dunia pengembangan web, khususnya pada area *Frontend Development*.
          </p>
          <p>
            Saya suka membangun produk digital yang tidak hanya berfungsi dengan baik di balik layar, tetapi juga memiliki visual yang bersih, minimalis, dan memberikan pengalaman pengguna (*User Experience*) yang menyenangkan.
          </p>
          <p>
            Blog ini saya rancang sebagai jurnal digital tempat saya mendokumentasikan teknologi yang saya pelajari seperti Next.js, React, Tailwind CSS, dan arsitektur web modern lainnya.
          </p>
        </div>
      </div>

      {/* Bagian Hubungi Saya (Contact Card) */}
      <div className="border-t border-border pt-8">
        <h3 className="font-semibold text-lg text-foreground mb-4">
          Let's Connect
        </h3>
        <p className="text-sm text-foreground/60 mb-4">
          Jika Anda tertarik untuk berkolaborasi, berdiskusi tentang proyek, atau sekadar menyapa, silakan hubungi saya melalui:
        </p>
        
        {/* Menggunakan layout baris rapat yang sudah kita optimasi sebelumnya */}
        <div className="flex flex-col space-y-1 text-sm text-foreground/70 max-w-xs">
          <a href="#" className="flex items-center gap-3 px-3 py-1.5 -mx-3 rounded-lg hover:text-foreground hover:bg-foreground/10 transition-colors group">
            <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>github</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-1.5 -mx-3 rounded-lg hover:text-foreground hover:bg-foreground/10 transition-colors group">
            <AiOutlineMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>email</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-1.5 -mx-3 rounded-lg hover:text-foreground hover:bg-foreground/10 transition-colors group">
            <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>linkedin</span>
          </a>
        </div>
      </div>
    </div>
  );
}