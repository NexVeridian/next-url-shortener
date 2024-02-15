import DarkModeToggle from "@/components/dark-mode-toggle";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="relative flex flex-row place-items-center gap-4 p-2 px-4 font-medium border-b">
      <div className="text-2xl">
        <Link href="/">Next Url Shortener</Link>
      </div>

      <div className="transition-colors text-foreground/50 hover:text-foreground/100">
        <Link href="/create">Create</Link>
      </div>

      <div className="transition-colors text-foreground/50 hover:text-foreground/100">
        <Link href="/stats">Stats</Link>
      </div>


      <div className="flex flex-1 items-center justify-between gap-4 md:justify-end">
        <div className="transition-colors text-foreground/50 hover:text-foreground/100">
          <Link href="https://github.com/NexVeridian/next-url-shortener">GitHub</Link>
        </div>

        <DarkModeToggle />
      </div>
    </nav>
  );
}
