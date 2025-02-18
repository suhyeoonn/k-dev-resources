import Header from "./Header";
import ContentList from "./ContentList";
import Footer from "./Footer";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ContentList />
      </main>
      <Footer />
    </div>
  );
}
