import { Outlet } from "@tanstack/react-router";
import { Footer } from "./site/footer";
import { Header } from "./site/header";

export const RootWrapper = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}