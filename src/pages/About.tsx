import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, MapPin, Mail, Instagram, Linkedin, Sparkles, Palette, Lightbulb, Phone } from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const skills = [
    'Cinematic Portrait Photography',
    'Fine Art Landscapes',
    'Tech & Coding Projects',
    'Digital Innovation',
    'Street Photography',
    'Football & Team Discipline',
    'Color Grading & Retouching',
    'Continuous Learning & Exploration'
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

      <div className="pt-20 sm:pt-32 pb-10 sm:pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16 sm:mb-24"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 text-primary luxury-pulse" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extralight mb-6 sm:mb-8 cinematic-title text-white px-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Vedant</span>
            </h1>
            <div className="w-24 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 sm:mb-12 luxury-glow" />
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
              From shutter clicks to code scripts every frame tells a story
            </p>
          </motion.div>

          {/* Hero Section with Profile */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 sm:mb-24 items-center">
            {/* Profile Image */}
            <motion.div
 className="relative order-1 lg:order-1"
 initial={{ opacity: 0, x: -60 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 1.2, delay: 0.3 }}
>
 <div className="luxury-card p-4 sm:p-8 text-center bg-gray-900 border-gray-800 rounded-2xl">
   <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto mb-6 sm:mb-8 mt-2 sm:mt-4 relative">
     <div className="absolute inset-0 luxury-glow rounded-full bg-primary/20" />
     <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-700">
       <img
         src="https://ik.imagekit.io/mid2fiwk2/pic.jpg"
         alt="Profile"
         className="w-full h-full object-cover"
       />
     </div>
   </div>
   <h3 className="text-xl sm:text-2xl font-light mb-2 cinematic-title text-white">The Artist</h3>
   <p className="text-sm sm:text-base text-gray-400">Photographer & Visual Storyteller</p>
 </div>
</motion.div>

            {/* Story */}
            <motion.div
              className="space-y-6 sm:space-y-8 order-2 lg:order-2"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <Card className="luxury-card p-6 sm:p-10 bg-gray-900 border-gray-800">
                <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 cinematic-title text-white">My Journey</h2>
                <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed font-light text-base sm:text-lg">
                  <p>
                    Hello wandering visitor, I am Vedant. A self-appointed shutterbug who captures the moments of the world before
                    they fade out of sight or mind.
                  </p>
                  <p>
                    But I am not just someone behind a camera. I am a tech enthusiast who enjoys exploring computer science,
                    experimenting with new tools, and building projects that connect innovation with purpose.
                    I like taking ideas from imagination to execution, whether it's coding a solution, designing a project,
                    or finding smarter ways to use technology.
                  </p>
                  <p>
                    Away from the screen, the football field is my second home. Playing as a goalkeeper has taught me discipline,
                    focus, and resilience—qualities that shape how I approach challenges in life too.
                  </p>
                  <p>
                    At heart, I am curious, creative, and constantly learning, trying to hold on to the moments, skills,
                    and experiences that shape who I am before they fade away.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Combined Contact and Expertise Section */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-24">
            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Card className="luxury-card p-6 sm:p-10 bg-gray-900 border-gray-800 h-full">
                <h3 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8 cinematic-title text-white">Let's Connect</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 text-gray-300">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white text-sm sm:text-base">Ahmedabad, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 text-gray-300">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white text-sm sm:text-base">Contact</p>
                      <p className="text-xs sm:text-sm">+916352489143</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
                  <a href="mailto:your-email@example.com" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700 text-xs sm:text-sm">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Email
                    </Button>
                  </a>
                  <a href="https://instagram.com/_vedant_14522/" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700 text-xs sm:text-sm">
                      <Instagram className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Instagram
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700 text-xs sm:text-sm">
                      <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
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
              <Card className="luxury-card p-6 sm:p-10 bg-gray-900 border-gray-800 h-full">
                <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-center cinematic-title text-white">Expertise & Specializations</h2>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Badge
                        variant="outline"
                        className="w-full py-2 sm:py-3 px-3 sm:px-4 text-center luxury-card bg-gray-800 border-gray-700 text-gray-200 hover:border-primary/50 hover:text-primary transition-all duration-300 text-xs sm:text-sm"
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
            <Card className="luxury-card p-8 sm:p-16 text-center bg-gray-900 border-gray-800">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Palette className="h-6 w-6 sm:h-8 sm:w-8 text-primary luxury-pulse" />
              </div>
              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight italic text-white mb-6 sm:mb-8 leading-relaxed cinematic-title px-4">
                "Photography is the art of frozen time... the ability to store emotion and feelings within a frame, creating windows to moments that transcend the ordinary."
              </blockquote>
              <cite className="text-gray-400 font-light text-sm sm:text-base lg:text-lg"></cite>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;