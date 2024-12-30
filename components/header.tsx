import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-[#0A0A0A] border-b-4 border-[#3a3836] shadow-md flex justify-between items-center p-4 text-white "> {/* Updated styling */}
      {/* Left Side (Buttons) */}
      <div className="flex space-x-4">
        <Link href="/tradePage" className="hover:text-gray-300"> {/* Updated hover effect */}
          <Button>
            Trade
          </Button>
        </Link>
        <Link href="/about" className="hover:text-gray-300">
        <Button>
            Transactions
          </Button>
        </Link>
        <Link href="/services" className="hover:text-gray-300">
        <Button>
            Orders
          </Button>
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
        <Button>
            Wallet
          </Button>
        </Link>
      </div>

      {/* Right Side (Clerk Auth) */}
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}