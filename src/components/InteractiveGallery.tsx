import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, MapPin, Calendar, Aperture, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  camera: string;
  settings: string;
  aspectRatio: string;
  story: string;
  image: string;
  isPortrait: boolean;
}

const InteractiveGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver>();

  const galleryItems: GalleryItem[] = [

    {
      id: 1,
      category: 'Landscape',
      title: 'Brand Photography',
      description: 'Professional business portraits',
      location: 'Downtown Studio',
      date: 'July 2024',
      camera: 'Fujifilm GFX 100S',
      settings: 'f/4 • 1/125s • ISO 160',
      aspectRatio: 'aspect-rectangle',
      story: 'Corporate photography that captures the essence of modern business leaders. Clean, professional lighting that emphasizes confidence and approachability.',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_9899.jpg?updatedAt=1756850921665',
      isPortrait: false,
    },
    {
      id: 4,
      category: 'Animals',
      title: 'Brand Photography',
      description: 'Professional business portraits',
      location: 'Downtown Studio',
      date: 'July 2024',
      camera: 'Fujifilm GFX 100S',
      settings: 'f/4 • 1/125s • ISO 160',
      aspectRatio: 'aspect-rectangle',
      story: 'Corporate photography that captures the essence of modern business leaders. Clean, professional lighting that emphasizes confidence and approachability.',
      image: 'https://ik.imagekit.io/mid2fiwk2/DSC_2437-2.jpg?updatedAt=1756455838346',
      isPortrait: false,
    },
    {
      id: 5,
      category: 'Animals',
      title: 'Urban Stories',
      description: 'Life in the city streets',
      location: 'San Francisco',
      date: 'June 2024',
      camera: 'Leica Q2',
      settings: 'f/5.6 • 1/500s • ISO 800',
      aspectRatio: 'aspect-rectangle',
      story: 'Street photography captures the authentic moments of urban life. This shot represents the hustle and beauty of city living in its purest form.',
      image: 'https://ik.imagekit.io/mid2fiwk2/DSC_2483-2.jpg?updatedAt=1756455838302',
      isPortrait: false,
    },
    {
      id: 6,
      category: 'Animals',
      title: 'Wildlife Encounters',
      description: 'Animals in their natural habitat',
      location: 'Yosemite National Park',
      date: 'May 2024',
      camera: 'Canon EOS R3',
      settings: 'f/8 • 1/1000s • ISO 1600',
      aspectRatio: 'aspect-rectangle',
      story: 'Early morning wildlife photography in Yosemite revealed this majestic scene. Patience and respect for nature resulted in this incredible encounter.',
      image: 'https://ik.imagekit.io/mid2fiwk2/DSC_2546-2.jpg?updatedAt=1756455838076',
      isPortrait: false,
    },
    {
      id: 7,
      category: 'Animals',
      title: 'Brand Photography',
      description: 'Professional business portraits',
      location: 'Downtown Studio',
      date: 'July 2024',
      camera: 'Fujifilm GFX 100S',
      settings: 'f/4 • 1/125s • ISO 160',
      aspectRatio: 'aspect-rectangle',
      story: 'Corporate photography that captures the essence of modern business leaders. Clean, professional lighting that emphasizes confidence and approachability.',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_1790.JPG?updatedAt=1756455837955',
      isPortrait: true,
    },
  ];

  const categories = ['All', 'Portraits', 'Landscape', 'Animals'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const handleCardClick = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 mesh-background opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 cinematic-title">
            Portfolio Gallery
          </h2>
          <div className="w-32 h-[2px] bg-primary mx-auto mb-12 luxury-glow" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Every frame tells a story. Explore a curated collection of moments
            where light, emotion, and artistry converge.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.div key={category} whileTap={{ scale: 0.95 }}>
                <Badge
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-500 px-6 py-3 text-sm font-medium rounded-full ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground luxury-pulse'
                      : 'luxury-card hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -60, scale: 0.9 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.23, 1, 0.32, 1]
                }}
                whileHover={{ y: -12 }}
                className="gallery-item"
                data-id={item.id}
                ref={(el) => el && observerRef.current?.observe(el)}
              >
                <Card className={`flip-card h-96 cursor-pointer ${flippedCard === item.id ? 'flipped' : ''}`} onClick={() => handleCardClick(item.id)}>
                  <div className="flip-face luxury-card h-full rounded-lg overflow-hidden">
                    <div className={`${item.isPortrait ? 'w-full h-full' : 'w-full h-full'} relative overflow-hidden`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="gallery-overlay" />
                      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Badge variant="secondary" className="text-xs">
                          Click to flip
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flip-face flip-back luxury-card h-full rounded-lg p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-secondary/80">
                          {item.category}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxImage(item.id);
                          }}
                          className="text-primary hover:bg-primary/10"
                        >
                          View Full
                        </Button>
                      </div>

                      <h3 className="font-semibold text-xl mb-3 text-foreground">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {item.story}
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {item.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {item.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Camera className="h-4 w-4 mr-2 text-primary" />
                        {item.camera}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Aperture className="h-4 w-4 mr-2 text-primary" />
                        {item.settings}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 luxury-card text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full luxury-glow">
                <Camera className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-light mb-6 cinematic-title">Ready to Create?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Let's capture your story with the same cinematic approach. Every session is
              a collaboration to create something uniquely yours.
            </p>
            <Button size="lg" className="luxury-card bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full">
              Book a Session
            </Button>
          </Card>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
                onClick={() => setLightboxImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="luxury-card p-2 rounded-2xl">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src={galleryItems.find(img => img.id === lightboxImage)?.image || ''}
                    alt={galleryItems.find(img => img.id === lightboxImage)?.title || ''}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InteractiveGallery;