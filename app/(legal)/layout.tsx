import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <article
          className="
            text-on-surface-variant leading-relaxed
            [&_h1]:text-3xl md:[&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:text-primary-container [&_h1]:tracking-tight [&_h1]:mb-6
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-on-background [&_h2]:mt-10 [&_h2]:mb-3
            [&_p]:mb-4
            [&_a]:text-primary-container [&_a]:font-semibold hover:[&_a]:underline
          "
        >
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
