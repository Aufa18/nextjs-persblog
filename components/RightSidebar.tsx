import { profileData } from '@/data/blogData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { GrContact } from 'react-icons/gr';
import { TbFileCv } from 'react-icons/tb';
import { RiSettingsLine } from 'react-icons/ri';

export default function RightSidebar() {
  return (
    <>
      {/* Profile Card */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2 text-foreground/80">
          <span>💻</span> Profile
        </h3>
        <div className="relative p-6 bg-card rounded-2xl flex flex-col items-center text-center shadow-sm overflow-hidden">
          
          {/* LAYER BACKGROUND GRID */}
          <div
            className="absolute inset-0 pointer-events-none z-0 
                       bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] 
                       bg-size-[48px_42px]"
            aria-hidden="true"
          ></div>

          {/* Avatar Placeholder */}
          <div className="relative z-10 w-24 h-24 bg-foreground/10 rounded-full mb-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-tr from-emerald-100/30 to-blue-100/30 rounded-full blur-2xl scale-110"></div>
            {/* Ganti dengan Tag <img> atau <Image> Next.js untuk avatar */}
            <span className="text-4xl">🧑🏻‍💻</span>
          </div>
          
          <h2 className="relative z-10 text-lg font-bold text-foreground">
            {profileData.name}
          </h2>
          <p className="relative z-10 text-sm text-foreground/60 mb-4">{profileData.role}</p>
          <p className="relative z-10 text-sm text-foreground/80">{profileData.bio}</p>
        </div>
      </div>

      {/* Service Card */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2 text-foreground/80">
          <RiSettingsLine className="w-5 h-5" />
          Service
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
          <GrContact className="w-5" />
          <span>Contact</span>
        </h3>
        <div className="p-2 bg-card rounded-xl flex flex-col space-y-1 text-sm text-foreground/70 shadow-sm">
          <a
            href="https://github.com/Aufa18"
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