'use client';

const navLinks = ['About', 'Games', 'Socials', 'Management'];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ 
  activeSection, 
  setActiveSection 
}: NavbarProps) {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full flex justify-center pt-6 px-3">
        <div className="w-full max-w-2xl flex items-center justify-between
                        bg-white/5 border border-white/10 
                        rounded-full px-5 py-3 backdrop-blur-md">
          
          {/* Logo */}
          <span className="text-purple-500 font-bold text-lg 
                           md:text-xl whitespace-nowrap">
            Sidney
          </span>

          {/* Nav Links — always visible, even on mobile */}
          <div className="flex items-center gap-3 md:gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveSection(link.toLowerCase())}
                className={`text-sm md:text-base font-medium 
                           transition-colors duration-200
                           whitespace-nowrap
                           ${activeSection === link.toLowerCase()
                             ? 'text-purple-500'
                             : 'text-gray-300 hover:text-white'
                           }`}
              >
                {link}
              </button>
            ))}
          </div>

        </div>
      </nav>
    </div>
  );
}
