import HeroSection from '/HeroSection';

export default function Home() {
  return (
		<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] flex items-center justify-center">
			<h1 className="text-4xl font-bold text-center">Art of Music</h1>
			<HeroSection />
		</main>
  );
}
