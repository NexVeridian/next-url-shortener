import DarkModeToggle from "@/components/dark-mode-toggle";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="relative flex flex-row place-items-center gap-4 p-2 px-4 font-medium border-b">
      <div className="text-2xl">
        <Link href="/">Next Url Shortener</Link>
      </div>

      <div>
        <Link href="/create">create</Link>
      </div>

      <div>
        <Link href="/stats">create</Link>
      </div>

      <div className="absolute right-4">
        <DarkModeToggle />
      </div>
    </nav>
  );
}
