import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Camera,
  MapPin,
  Mail,
  Instagram,
  Linkedin,
  Sparkles,
  Palette,
  Phone,
} from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const skills = [
    'Fine Art Landscapes',
    'Tech & Coding Projects',
    'Digital Innovation',
    'Street Photography',
    'Football & Team Discipline',
    'Color Grading & Retouching',
    'Cinematic Portrait Photography',
    'Continuous Learning & Exploration',
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-100" />

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
              boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.5)',
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 cinematic-title text-white">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Vedant
              </span>
            </h1>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12 luxury-glow" />
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              From shutter clicks to code scripts every frame tells a story
            </p>
          </motion.div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            {/* Profile */}
            <motion.div
  className="relative w-full max-w-md mx-auto"
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, delay: 0.3 }}
>
  <div className="luxury-card p-6 sm:p-8 text-center bg-gray-900 border-gray-800 rounded-xl">
    <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto mb-8 mt-4 relative">
      <div className="absolute inset-0 luxury-glow rounded-full bg-primary/20" />
      <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-700">
        <img
          src="https://ik.imagekit.io/mid2fiwk2/pic.jpg?updatedAt=1756909817059"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <h3 className="text-xl sm:text-2xl font-light mb-2 cinematic-title text-white">The Artist</h3>
    <p className="text-gray-400 text-sm sm:text-base">Photographer & Visual Storyteller</p>
  </div>
</motion.div>


            {/* Story */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <Card className="luxury-card p-6 sm:p-10 bg-gray-900 border-gray-800">
                <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 cinematic-title text-white">My Journey</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed font-light text-base sm:text-lg">
                  <p>
                    Hello wandering visitor, I am Vedant. A self-appointed shutterbug who captures the moments of the
                    world before they fade out of sight or mind.
                  </p>
                  <p>
                    But I am not just someone behind a camera. I am a tech enthusiast who enjoys exploring computer
                    science, experimenting with new tools, and building projects that connect innovation with purpose.
                    I like taking ideas from imagination to execution, whether it’s coding a solution, designing a
                    project, or finding smarter ways to use technology.
                  </p>
                  <p>
                    Away from the screen, the football field is my second home. Playing as a goalkeeper has taught me
                    discipline, focus, and resilience—qualities that shape how I approach challenges in life too.
                  </p>
                  <p>
                    At heart, I am curious, creative, and constantly learning, trying to hold on to the moments, skills,
                    and experiences that shape who I am before they fade away.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Contact & Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Card className="luxury-card p-6 sm:p-10 bg-gray-900 border-gray-800 h-full">
                <h3 className="text-2xl font-light mb-6 sm:mb-8 cinematic-title text-white">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium text-white">Ahmedabad, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium text-white">Contact</p>
                      <p className="text-sm">+91 6352489143</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a href="mailto:your-email@example.com">
                    <Button variant="outline" size="sm" className="luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </a>
                  <a href="https://instagram.com/_vedant_14522/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Card className="luxury-card p-6 sm:p-10 bg-gray-900 border-gray-800 h-full">
                <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-center cinematic-title text-white">
                  Expertise & Specializations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
                        className="w-full py-3 px-4 text-center luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:border-primary/50 hover:text-primary transition-all duration-300 text-sm"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <Card className="luxury-card p-10 sm:p-16 text-center bg-gray-900 border-gray-800">
              <div className="flex justify-center mb-6">
                <Palette className="h-8 w-8 text-primary luxury-pulse" />
              </div>
              <blockquote className="text-xl sm:text-3xl md:text-4xl font-extralight italic text-white mb-8 leading-relaxed cinematic-title">
                "Photography is the art of frozen time... the ability to store emotion and feelings within a frame,
                creating windows to moments that transcend the ordinary."
              </blockquote>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
