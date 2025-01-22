import RootHeader from "./Header";
import RootFooter from "./Footer";
import "./MainLayout.scss";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="main-section">
      <RootHeader />

      <main className="p-4">
        {children}
      </main>

      <RootFooter />
    </section>
  );
}
