import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, MapPin, Mail, Instagram, Linkedin, Sparkles, Palette, Lightbulb } from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const skills = [
    'Cinematic Portrait Photography',
    'Fine Art Landscapes',
    'Luxury Wedding Photography',
    'Commercial & Editorial',
    'Street Photography',
    'Advanced Digital Artistry',
    'Color Grading & Retouching',
    'Creative Direction'
  ];



  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-100" />

        {/* Floating particles/light effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.5)'
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Subtle light beams */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        </div>
      </div>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="h-12 w-12 text-primary luxury-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 cinematic-title text-white">
              About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Lightkeeper</span>
            </h1>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12 luxury-glow" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Someone captures a moment when they want to hold it for long but after all it fades away with time
            </p>
          </motion.div>

          {/* Hero Section with Profile */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            {/* Profile Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <div className="luxury-card p-8 text-center bg-gray-900 border-gray-800">
                <div className="w-80 h-80 mx-auto mb-8 relative">
                  <div className="absolute inset-0 luxury-glow rounded-full bg-primary/20" />
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-700">
                    <div className="relative">
                      <Camera className="h-32 w-32 text-primary/40" />
                      <Lightbulb className="h-8 w-8 text-primary absolute -top-2 -right-2 luxury-pulse" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-2 cinematic-title text-white">The Artist</h3>
                <p className="text-gray-400">Lightkeeper & Visual Storyteller</p>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <Card className="luxury-card p-10 bg-gray-900 border-gray-800">
                <h2 className="text-3xl font-light mb-8 cinematic-title text-white">My Journey</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg">
                  <p>
                    Like a lighthouse cuts through darkness to guide ships safely home, I believe
                    photography illuminates the extraordinary within the ordinary. My journey began
                    fifteen years ago with a vintage film camera and an endless fascination with
                    how light sculpts our world.
                  </p>
                  <p>
                    From the ethereal glow of dawn breaking over coastal cliffs to the intimate
                    warmth of candlelit celebrations, I specialize in capturing light as both
                    subject and storyteller. Each frame is crafted with cinematic precision,
                    creating visual narratives that resonate long after the moment has passed.
                  </p>
                  <p>
                    Based along the dramatic coastlines where historic lighthouses have guided
                    travelers for centuries, I draw deep inspiration from the eternal dance
                    between natural light and human emotion.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Combined Contact and Expertise Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Card className="luxury-card p-10 bg-gray-900 border-gray-800 h-full">
                <h3 className="text-2xl font-light mb-8 cinematic-title text-white">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium text-white">Pacific Coast, USA</p>
                      <p className="text-sm">Available worldwide for projects</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Camera className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium text-white">Professional Services</p>
                      <p className="text-sm">Portraits, weddings, commercial & fine art</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <Button variant="outline" size="sm" className="luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                  <Button variant="outline" size="sm" className="luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Skills & Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Card className="luxury-card p-10 bg-gray-900 border-gray-800 h-full">
                <h2 className="text-3xl font-light mb-8 text-center cinematic-title text-white">Expertise & Specializations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="w-full py-3 px-4 text-center luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:border-primary/50 hover:text-primary transition-all duration-300 text-xs"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <Card className="luxury-card p-16 text-center bg-gray-900 border-gray-800">
              <div className="flex justify-center mb-6">
                <Palette className="h-8 w-8 text-primary luxury-pulse" />
              </div>
              <blockquote className="text-3xl md:text-4xl font-extralight italic text-white mb-8 leading-relaxed cinematic-title">
                "Photography is the art of frozen time... the ability to store emotion and feelings within a frame, creating windows to moments that transcend the ordinary."
              </blockquote>
              <cite className="text-gray-400 font-light text-lg">— Philosophy of the Lightkeeper</cite>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;