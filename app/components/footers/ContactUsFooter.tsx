import Image from "next/image";
import Link from "next/link";

// This footer is for Contact Us Page Desktop view. Use this footer only for Contact Us Page Desktop view
export function ContactUsFooter() {
    return (
        <footer className="font-[var(--font-product-sans)] hidden md:block bg-[#FFFFFF]">
            <div className="w-[95%] h-px bg-gray-500 mx-auto" />
            <div className="mx-auto px-12 py-5 flex items-center justify-between">
        
                <div className="flex items-center gap-4">
                    <Image
                        src="/Logo.svg"
                        alt="GDG Logo"
                        width={60}
                        height={38}
                        />
                    <div>
                    <h2 className="text-[25px] text-[#383838]">
                        Google Developer Groups
                    </h2>
                    <p className="text-[15px] text-[#383838]">
                        On Campus · Netaji Subhas University Of Technology
                    </p>
                    </div>
                </div>
        
                <div className="flex item-end gap-4">
                    <div className="flex items-center gap-10">
                        <Link
                            href="https://www.instagram.com/gdsc_nsut/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:opacity-80 transition"
                            >    
                            <Image src="/footers-icons/ContactUsFooterIcons/instagram.svg" alt="Instagram" width={45} height={45} />
                        </Link>

                        <Link
                            href="https://github.com/GDSC-NSUT"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:opacity-80 transition"
                        >

                            <Image src="/footers-icons/ContactUsFooterIcons/github.svg" alt="GitHub" width={45} height={45} />
                        </Link>

                        <Link
                        href="https://www.linkedin.com/company/gdscnsut/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:opacity-80 transition"
                        >

                            <Image src="/footers-icons/ContactUsFooterIcons/linkedin.svg" alt="LinkedIn" width={45} height={45} />
                        </Link>

                        <Link
                        href="https://www.instagram.com/gdsc_nsut/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:opacity-80 transition"
                        >
                            <Image src="/footers-icons/ContactUsFooterIcons/discord.svg" alt="Discord" width={45} height={45} />
                        </Link>
                    </div>
                </div>
        
        </div>
    </footer>
    );

}