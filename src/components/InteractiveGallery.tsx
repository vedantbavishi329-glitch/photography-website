import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  aspectRatio: string;
  story: string;
  image: string;
  isPortrait: boolean;
}

const InteractiveGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'Landscape',
      title: 'Brand Photography',
      description: 'Professional business portraits',
      location: 'Downtown Studio',
      date: 'July 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'Corporate photography that captures the essence of modern business leaders. Clean, professional lighting that emphasizes confidence and approachability.',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_9899.jpg?updatedAt=1756850921665',
      isPortrait: false,
    },
    {
      id: 2,
      category: 'Landscape',
      title: 'Brand Photography',
      description: 'Professional business portraits',
      location: 'Downtown Studio',
      date: 'July 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'Corporate photography that captures the essence of modern business leaders. Clean, professional lighting that emphasizes confidence and approachability.',
      image: 'https://ik.imagekit.io/mid2fiwk2/DSC_2780.JPG?updatedAt=1756853131303',
      isPortrait: false,
    },
    {
      id: 4,
      category: 'Animals',
      title: 'Brand Photography',
      description: 'Professional business portraits',
      location: 'Downtown Studio',
      date: 'July 2024',
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

  const handleCardClick = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-foreground">
            Portfolio Gallery
          </h2>
          <div className="w-32 h-[2px] bg-primary mx-auto mb-12" />
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
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Masonry Layout */}
        <div
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-20"
          style={{ columnGap: '2rem' }}
        >
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
                className="break-inside-avoid mb-8 group cursor-pointer"
                onClick={() => handleCardClick(item.id)}
              >
                <div
                  className="relative transition-all duration-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2"
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front Face - Pure Image */}
                  <div
                    className={`relative transition-all duration-700 ${
                      flippedCard === item.id ? 'opacity-0 rotate-y-180' : 'opacity-100'
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: flippedCard === item.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto block rounded-lg"
                      style={{
                        display: 'block',
                        margin: 0,
                        padding: 0,
                        border: 'none',
                        outline: 'none',
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {item.description}
                        </p>
                      </div>

                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                          Click to flip
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Back Face - Details - REMOVED THE LINE ABOVE LOCATION/DATE */}
                  <div
                    className={`absolute inset-0 bg-card rounded-lg p-6 transition-all duration-700 overflow-y-auto ${
                      flippedCard === item.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: flippedCard === item.id ? 'rotateY(0deg)' : 'rotateY(-180deg)',
                      height: '100%',
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="secondary" className="bg-secondary/80">
                            {item.category}
                          </Badge>

                        </div>

                        <h3 className="font-semibold text-xl mb-3 text-foreground">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {item.story}
                        </p>
                      </div>

                      {/* Removed the border-t that was creating the line */}
                      <div className="space-y-3 text-sm pt-2">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          {item.location}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
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

              <div className="p-2 rounded-2xl bg-card">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={galleryItems.find(img => img.id === lightboxImage)?.image || ''}
                    alt={galleryItems.find(img => img.id === lightboxImage)?.title || ''}
                    className="w-full h-full object-contain max-h-[80vh]"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS for flip animation */}
      <style>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default InteractiveGallery;