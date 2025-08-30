import Navigation from '@/components/Navigation';
import CinematicHero from '@/components/CinematicHero';
import InteractiveGallery from '@/components/InteractiveGallery';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      <CinematicHero />
      <InteractiveGallery />
    </div>
  );
};

export default Index;
