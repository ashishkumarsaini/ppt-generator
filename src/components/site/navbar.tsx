import { authClient } from "#/lib/auth-client"
import { Link, useRouter } from "@tanstack/react-router";
import { Button } from "#/components/ui/button.tsx";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

export const Navbar = () => {
  const { data } = authClient.useSession();
  const router = useRouter();

  const handleSignout = async () => {
    await authClient.signOut();

    router.navigate({ to: '/login' });
  }

  return (
    <>
      <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
        <a
          href="#workflow"
          className="transition-colors hover:text-foreground"
        >
          Workflow
        </a>
        <a
          href="#quality"
          className="transition-colors hover:text-foreground"
        >
          Quality
        </a>
        <a
          href="#exports"
          className="transition-colors hover:text-foreground"
        >
          Exports
        </a>
      </nav>

      <div className="flex items-center gap-2">
        {data?.user.name ? (
          <>
            <Button asChild>
              <Link to="/dashboard">
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" onClick={handleSignout}>
              Logout
            </Button>
          </>
        ) : (
          <Button asChild>
            <Link to="/login">
              <Sparkles className="size-4" aria-hidden="true" />
              Get started
            </Link>
          </Button>
        )}
        <ThemeToggle />
      </div>
    </>
  );
}