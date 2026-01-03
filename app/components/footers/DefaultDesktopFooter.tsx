import Image from "next/image";
import Link from "next/link";

// This footer is for Default Desktop view. Use this footer for all pages Desktop view except Home page and Contact Us page
export function DefaultDesktopFooter() {
    return (
        <footer className="font-[var(--font-product-sans)] hidden md:block bg-[#383838] text-white">
            <div className="max-w-7xl mx-auto py-5 flex items-center justify-between">

                <div className="flex items-center gap-4">
                    <Image
                        src="/Logo.svg"
                        alt="GDG Logo"
                        width={60}
                        height={38}
                    />
                    <div>
                    <h2 className="text-[25px] text-white-500">
                    Google Developer Groups
                    </h2>
                    <p className="text-[15px] text-white-400">
                    On Campus · Netaji Subhas University Of Technology
                    </p>
                    </div>
                </div>

                <div className="flex item-end gap-4">
                    <div className="flex items-center gap-10">
                        <Link
              href="https://x.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:opacity-80 transition"
            >
              <Image src="/footers-icons/HomeFooterIcons/X.svg" alt="X" width={28} height={28} />

            </Link>

            <Link
              href="https://www.instagram.com/gdsc_nsut/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition"
            >
              <Image src="/footers-icons/HomeFooterIcons/Instagram.svg" alt="Instagram" width={28} height={28} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/gdscnsut/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition"
            >
              <Image src="/footers-icons/HomeFooterIcons/LinkedIn.svg" alt="LinkedIn" width={28} height={28} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/gdscnsut/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition"
              >
                <Image src="/footers-icons/HomeFooterIcons/Discord.svg" alt="Discord" width={28} height={28} />
            </Link>
                    </div>
                 </div>

            </div>
        </footer>
                    
    );
}