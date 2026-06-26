import { profileData } from '@/data/blogData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { LuMessageCircleMore } from 'react-icons/lu';
import { TbFileCv } from 'react-icons/tb';

export default function RightSidebar() {
  return (
    <>
      {/* Profile Card */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2 text-foreground/80">
          <span>💻</span> Profile
        </h3>
        <div className="p-6 bg-card rounded-2xl flex flex-col items-center text-center shadow-sm">
          {/* Avatar Placeholder: bg transparan otomatis menyesuaikan mode */}
          <div className="w-24 h-24 bg-foreground/10 rounded-full mb-4 flex items-center justify-center overflow-hidden">
            {/* Ganti dengan Tag <img> atau <Image> Next.js untuk avatar */}
            <span className="text-4xl">🧑🏻‍💻</span>
          </div>
          <h2 className="text-lg font-bold text-foreground">
            {profileData.name}
          </h2>
          <p className="text-sm text-foreground/60 mb-4">{profileData.role}</p>
          <p className="text-sm text-foreground/80">{profileData.bio}</p>
        </div>
      </div>

      {/* Service Card */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2 text-foreground/80">
          <span>🌟</span> Service
        </h3>
        <a
          href="#"
          className="p-4 bg-card rounded-xl flex items-center gap-3 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/10 shadow-sm"
        >
          <TbFileCv className="w-6 h-6 group-hover:scale-110 transition-transform" />
          Download CV
        </a>
      </div>

      {/* Contact Card */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2 text-foreground/80">
          <LuMessageCircleMore className="w-4 h-4" />
          <span>Contact</span>
        </h3>

        {/* 1. p-4 diubah menjadi p-2: Mengurangi ruang dalam kotak.
    2. space-y-5 diubah menjadi space-y-1: Menghilangkan jarak lebar antar link.
  */}
        <div className="p-2 bg-card rounded-xl flex flex-col space-y-1 text-sm text-foreground/70 shadow-sm">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-1.5 -mx-1 rounded-lg hover:text-foreground hover:bg-foreground/10 transition-colors group"
          >
            <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
            github
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-1.5 -mx-1 rounded-lg hover:text-foreground hover:bg-foreground/10 transition-colors group"
          >
            <AiOutlineMail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            email
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-1.5 -mx-1 rounded-lg hover:text-foreground hover:bg-foreground/10 transition-colors group"
          >
            <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            linkedin
          </a>
        </div>
      </div>
    </>
  );
}