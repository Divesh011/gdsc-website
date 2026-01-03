import Image from "next/image";
import Link from "next/link";

// this Footer is for Mobile view. Use MobileFooter for all pages Mobile view
// add this footer in every page layout along with respective Desktop footers
export function MobileFooter() {
    return (
        <footer className="font-[var(--font-product-sans)] block md:hidden bg-[#1D1D1D] text-white">
            <div className="max-w-7xl mx-auto px-8 py-10 flex-col items-center justify-between">
                    
                    <div className="flex flex-col items-start gap-4">
                      
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
            
                    <div className="flex flex-col items-start gap-3 mt-5">
                      <span className="text-[20px] text-gray-300">
                        Connect with us
                      </span>
            
                      <div className="flex items-center gap-12 mt-3">
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