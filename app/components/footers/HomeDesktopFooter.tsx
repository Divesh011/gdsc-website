import Image from "next/image";
import Link from "next/link";

export function HomeDesktopFooter() {
  return (
    <footer className="font-[var(--font-product-sans)] hidden md:block bg-[#1D1D1D] text-white">
      <div className="max-w-7xl mx-auto px-8 py-10 flex items-center justify-between">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-start gap-4">
          {/* Logo */}
          <Image
            src="/Logo.svg"
            alt="GDG Logo"
            width={80}
            height={48}
          />

          {/* Text */}
          <div>
            <h2 className="text-[30px] text-white-500">
              Google Developer Groups
            </h2>
            <p className="text-[20px] text-white-400">
              On Campus · Netaji Subhas University Of Technology
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-end gap-3">
          <span className="text-[20px] text-gray-300">
            Connect with us
          </span>

          <div className="flex items-center gap-12 mt-5">
            <Link
              href="https://x.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:opacity-80 transition"
            >
              <Image src="/footers-icons/HomeFooterIcons/X.svg" alt="X" width={28} height={28} />

            </Link>

            
            <Image src="/footers-icons/HomeFooterIcons/Instagram.svg" alt="Instagram" width={28} height={28} />
            <Image src="/footers-icons/HomeFooterIcons/LinkedIn.svg" alt="LinkedIn" width={28} height={28} />
            <Image src="/footers-icons/HomeFooterIcons/Discord.svg" alt="Discord" width={28} height={28} />
          </div>
        </div>

      </div>
    </footer>
  );
}