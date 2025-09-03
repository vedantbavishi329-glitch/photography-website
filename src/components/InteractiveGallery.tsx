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
      title: 'Holiday Spirit\n',
      description: 'Festive holiday glow',
      location: 'Goa, India\n',
      date: 'December 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'A beautifully decorated Christmas tree stands as the centerpiece of a festive scene. Adorned with a mix of rustic and classic ornaments, it brings a warm and inviting holiday spirit to the space. The soft, ambient light and the glimpse of foliage in the foreground create a cozy atmosphere, celebrating the joy of the season.\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_9899.jpg?updatedAt=1756850921665',
      isPortrait: false,
    },
    {
      id: 2,
      category: 'Landscape',
      title: 'Path of Lanterns\n',
      description: 'Lantern-lit serenity',
      location: 'A Quiet Garden Path',
      date: 'November 2021',
      aspectRatio: 'aspect-rectangle',
      story: 'A tranquil scene of a garden path at night, illuminated by the warm, inviting glow of lanterns. The light reflects on the damp ground, enhancing the serene and mysterious atmosphere.',
      image: 'https://ik.imagekit.io/mid2fiwk2/DSC_2780.JPG?updatedAt=1756853131303',
      isPortrait: false,
    },
      {
      id: 3,
      category: 'Landscape',
      title: 'Tropical Sunset',
      description: 'Tropical sunset bliss',
      location: 'Goa,India',
      date: 'April 2023',
      aspectRatio: 'aspect-rectangle',
      story: 'The sun sinks into the horizon, painting the sky in shades of orange and pink. Silhouettes of palm trees frame the glowing reflection on the water, creating a tranquil scene where the day gently gives way to night.\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_5058.jpeg?updatedAt=1756878870593',
      isPortrait: false,
    },
      {
      id: 4,
      category: 'Landscape',
      title: 'Skyline Reflections',
      description: 'Urban skyline reflections',
      location: 'Dubai Marina, UAE',
      date: 'December 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'Towering skyscrapers rise above the calm waters, their glass facades blending into the hazy sky. The marina below adds a touch of luxury, where yachts rest quietly against the backdrop of Dubai’s modern architecture.\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_5582.JPG?updatedAt=1756878870982',
      isPortrait: false,
    },
      {
      id: 5,
      category: 'Landscape',
      title: 'Under the Cosmic Canvas',
      description: 'Starlit mountain solitude',
      location: 'Kangra, Darini',
      date: 'May 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'A lone tent glows with a warm, inviting light, a small beacon of comfort in the vastness of a rocky mountain valley. Above, the night sky is a breathtaking canvas of a million stars, creating a profound sense of solitude and wonder under the open air.\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/File%20-%202025-08-28T02_08_36.png?updatedAt=1756879090471',
      isPortrait: false,
    },
      {
      id: 6,
      category: 'Landscape',
      title: 'Riverside Calm',
      description: 'Tranquil riverside glow',
      location: 'Omkareshwar, Madhya Pradesh, India',
      date: 'May 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'As the evening sun casts a warm glow on the dam and surrounding cliffs, the river flows steadily, carrying with it the rhythm of life. Boats docked along the banks and people gathering by the water create a blend of nature, tradition, and daily routine.',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_1792.JPG?updatedAt=1756878839905',
      isPortrait: false,
    },
      {
      id: 7,
      category: 'Landscape',
      title: 'Desert Trails',
      description: 'Golden desert adventure',
      location: 'Dubai Desert, UAE',
      date: 'December 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'The vast golden dunes stretch endlessly under a clear sky, with the quad bike carving its own path across the untouched sand. A moment of adventure wrapped in silence, where freedom meets the desert’s raw beauty.\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_5212%202.JPG?updatedAt=1756879601879',
      isPortrait: false,
    },
    {
      id: 8,
      category: 'Animals',
      title: 'Forest Gaze\n',
      description: 'Golden forest encounter',
      location: 'Sasan Gir, Gujarat, India\n',
      date: 'November 2021',
      aspectRatio: 'aspect-rectangle',
      story: 'Two Sambar deer emerge from the dense undergrowth, their natural curiosity drawing them into the light. The golden sunlight filters through the trees, illuminating their coats and creating a captivating moment of connection in the wild.\n' +
          '\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/DSC_2437-2.jpg?updatedAt=1756455838346',
      isPortrait: false,
    },
    {
      id: 9,
      category: 'Animals',
      title: 'Golden Grazing\n',
      description: 'Sunlit forest herd',
      location: 'Sasan Gir, Gujarat, India\n',
      date: 'November 2021',
      aspectRatio: 'aspect-rectangle',
      story: 'A majestic stag and its herd are captured in a moment of tranquility as they graze on the forest floor. The late afternoon sunlight casts a warm, golden glow on their spotted coats, creating a serene and timeless image of life in the wild.\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/DSC_2483-2.jpg?updatedAt=1756455838302',
      isPortrait: false,
    },
    {
      id: 10,
      category: 'Animals',
      title: 'Forest Spotlight',
      description: 'Majestic forest stag',
      location: 'Sasan Gir, Gujarat, India\n',
      date: 'November 2021',
      aspectRatio: 'aspect-rectangle',
      story: 'A lone stag is illuminated by a narrow beam of sunlight, standing out against the deep shadows of the forest. The light accentuates its distinctive spotted coat and magnificent antlers, creating a dramatic and captivating scene of a solitary moment in the wild.\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/DSC_2546-2.jpg?updatedAt=1756455838076',
      isPortrait: false,
    },
    {
      id: 11,
      category: 'Animals',
      title: 'Monochrome Companion',
      description: 'Timeless canine portrait',
      location: 'Rajkot, Gujarat, India',
      date: 'May 2023',
      aspectRatio: 'aspect-rectangle',
      story: 'A close-up portrait in black and white captures the soulful expression of a Beagle. With its tongue slightly out and eyes full of warmth, the photo highlights the timeless charm and gentle nature of our animal companions, stripped of all color to focus on emotion.\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_1790.JPG?updatedAt=1756455837955',
      isPortrait: false,
    },
      {
      id: 12,
      category: 'Portraits',
      title: 'Leap of Freedom',
      description: 'Desert sunset leap',
      location: 'Dubai Desert, UAE',
      date: 'December 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'Against the golden desert sunset, a jump freezes mid-air, scattering sand into the wind. The silhouette captures pure energy and joy, blending adventure with the calm beauty of dusk.',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_5292%202.JPG?updatedAt=1756901391487',
      isPortrait: true,
    },
    {
      id: 13,
      category: 'Portraits',
      title: 'A Moment with Coffee',
      description: 'Fiery night performance',
      location: 'Starbucks, India',
      date: 'May 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'A genuine smile is captured in the warm, inviting light of a cafe. This portrait finds the perfect harmony between a person and their daily ritual, turning a simple moment of comfort into a beautiful, candid story.',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_0718.jpg?updatedAt=1756901391759',
      isPortrait: true,
    },
      {
      id: 14,
      category: 'Portraits',
      title: 'Trail of Fire',
      description: 'Fiery night performance',
      location: 'Sasan Gir, Gujarat,India',
      date: 'November 2021',
      aspectRatio: 'aspect-rectangle',
      story: 'A trail of fire erupts from a performer\'s mouth, a moment of raw energy and skill against the dark canvas of the night. This shot captures the dangerous and beautiful artistry of a performance, frozen in a flash of heat and light.',
      image: 'https://ik.imagekit.io/mid2fiwk2/DSC_2210.JPG?updatedAt=1756901391316',
      isPortrait: false,
    },
      {
      id: 15,
      category: 'Portraits',
      title: 'The Champions\' Legacy',
      description: 'Legendary football legacy',
      location: 'Dubai, UAE\n',
      date: 'December 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'A tribute to greatness, these framed jerseys stand as silent witnesses to historic victories. Each shirt represents a chapter in a legendary football club\'s story, immortalized in a moment of reverence.\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/File%20-%202025-08-27T20_11_54.png?updatedAt=1756901391381',
      isPortrait: false,
    },
      {
      id: 16,
      category: ' Landscape',
      title: 'Cascading Serenity',
      description: 'Ethereal waterfall beauty',
      location: 'Kangra, Darini\n',
      date: 'May 2024',
      aspectRatio: 'aspect-rectangle',
      story: 'A powerful waterfall plunges into a clear pool, creating a serene and majestic scene. The long exposure technique transforms the rushing water into a silky, ethereal veil, highlighting the raw beauty of the verdant cliffs and the vibrant life that surrounds it.\n' +
          '\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/IMG_3411.jpeg?updatedAt=1756906032390',
      isPortrait: false,
    },
       {
      id: 17,
      category: 'Portraits',
      title: 'Voices in Action',
      description: 'Energetic classroom debate',
      location: 'Ahmedabad, India\n',
      date: 'August 2025',
      aspectRatio: 'aspect-rectangle',
      story: 'A vibrant classroom scene during a Model UN conference, filled with energy, curiosity, and ideas in motion. Students engage with enthusiasm, holding placards high, while laughter and confidence fill the room.\n',
      image: 'https://ik.imagekit.io/mid2fiwk2/prot2.jpg?updatedAt=1756907301681',
      isPortrait: false,
    },
    {id: 18,
      category: 'Portraits',
      title: 'Timeless Bond\n',
      description: 'Eternal joyful connection',
      location: 'Ahmedabad, India\n',
      date: 'March 2025',
      aspectRatio: 'aspect-rectangle',
      story: 'Captured in black and white, this moment reflects pure joy and companionship. Their smiles and joined hands tell a story of love, trust, and togetherness that stands gracefully against the flow of time.',
      image: 'https://ik.imagekit.io/mid2fiwk2/prot.jpg?updatedAt=1756907301606',
      isPortrait: false,
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