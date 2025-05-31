import { ThemeToggle } from "@/components/theme-toggle";
import { SignUpForm } from "@/components/signup-form";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <main>
        <SignUpForm />
      </main>
    </div>
  );
}
