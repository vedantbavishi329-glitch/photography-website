import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Image } from 'lucide-react';

const PhotoGallery = () => {
  // Placeholder gallery items - these would be replaced with actual photos
  const galleryItems = [
    {
      id: 1,
      category: 'Portrait',
      title: 'Golden Hour Sessions',
      description: 'Capturing natural light portraits',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      id: 2,
      category: 'Landscape',
      title: 'Coastal Sunrises',
      description: 'Early morning lighthouse views',
      aspectRatio: 'aspect-[16/9]'
    },
    {
      id: 3,
      category: 'Wedding',
      title: 'Intimate Ceremonies',
      description: 'Love stories in natural light',
      aspectRatio: 'aspect-square'
    },
    {
      id: 4,
      category: 'Commercial',
      title: 'Brand Photography',
      description: 'Professional business portraits',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      id: 5,
      category: 'Street',
      title: 'Urban Stories',
      description: 'Life in the city streets',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      id: 6,
      category: 'Nature',
      title: 'Wildlife Encounters',
      description: 'Animals in their natural habitat',
      aspectRatio: 'aspect-[16/9]'
    }
  ];

  const categories = ['All', 'Portrait', 'Landscape', 'Wedding', 'Commercial', 'Street', 'Nature'];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 glare-effect">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Portfolio Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 lighthouse-glow" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Where light meets story. Each photograph captures a moment of truth, 
            illuminated by the perfect interplay of shadow and brightness.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground border-glow transition-all duration-300 px-4 py-2 text-sm"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item) => (
            <Card 
              key={item.id}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              {/* Photo Placeholder */}
              <div className={`${item.aspectRatio} bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden glare-effect`}>
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  <div className="text-center">
                    <Camera className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p className="text-sm font-medium">Photo Coming Soon</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Light Beam Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-secondary/80">
                    {item.category}
                  </Badge>
                  <Image className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery Info */}
        <Card className="p-8 bg-card/30 backdrop-blur-sm border-border text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full lighthouse-glow">
              <Camera className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Gallery Coming Soon</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            This portfolio is currently being curated with the finest captures from recent sessions. 
            Each photograph will showcase the unique interplay of light and emotion that defines the Lightkeeper aesthetic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="border-glow px-6 py-2">
              📸 Portrait Sessions Available
            </Badge>
            <Badge variant="outline" className="border-glow px-6 py-2">
              🌅 Landscape Collections
            </Badge>
            <Badge variant="outline" className="border-glow px-6 py-2">
              💍 Wedding Photography
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PhotoGallery;