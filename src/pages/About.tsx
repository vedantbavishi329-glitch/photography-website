import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Award, Users, MapPin, Mail, Instagram, Linkedin } from 'lucide-react';

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

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'International Photography Award',
      year: '2023',
      description: 'Portrait Series Winner'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: '500+ Happy Clients',
      year: 'Since 2019',
      description: 'Worldwide collaborations'
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: 'Featured in National Geographic',
      year: '2022',
      description: 'Nature photography series'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 mesh-background opacity-30"
      />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 cinematic-title">
              About the Lightkeeper
            </h1>
            <div className="w-32 h-[2px] bg-primary mx-auto mb-12 luxury-glow" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
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
              <div className="luxury-card p-8 text-center">
                <div className="w-80 h-80 mx-auto mb-8 relative">
                  <div className="absolute inset-0 luxury-glow rounded-full" />
                  <div className="relative w-full h-full bg-gradient-to-br from-muted to-muted/50 rounded-full flex items-center justify-center">
                    <Camera className="h-32 w-32 text-muted-foreground/40" />
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-2 cinematic-title">The Artist</h3>
                <p className="text-muted-foreground">Lightkeeper & Visual Storyteller</p>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <Card className="luxury-card p-10">
                <h2 className="text-3xl font-light mb-8 cinematic-title">My Journey</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed font-light text-lg">
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

          {/* Skills & Expertise */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <Card className="luxury-card p-12">
              <h2 className="text-3xl font-light mb-12 text-center cinematic-title">Expertise & Specializations</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="outline"
                      className="w-full py-3 px-4 text-center luxury-card hover:border-primary/50 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="luxury-card p-8 text-center h-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-full luxury-glow">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">{achievement.title}</h3>
                  <p className="text-primary font-medium mb-2">{achievement.year}</p>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 mb-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <Card className="luxury-card p-10">
              <h3 className="text-2xl font-light mb-8 cinematic-title">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Pacific Coast, USA</p>
                    <p className="text-sm">Available worldwide for projects</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <Camera className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Professional Services</p>
                    <p className="text-sm">Portraits, weddings, commercial & fine art</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="sm" className="luxury-card">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm" className="luxury-card">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="luxury-card">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </Card>

            <Card className="luxury-card p-10">
              <h3 className="text-2xl font-light mb-8 cinematic-title">Book a Session</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to create something extraordinary together? I collaborate with each client 
                to craft a unique visual experience that authentically represents your story.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-full">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="w-full luxury-card py-4 rounded-full">
                  View Investment Guide
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <Card className="luxury-card p-16 text-center">
              <blockquote className="text-3xl md:text-4xl font-extralight italic text-foreground mb-8 leading-relaxed cinematic-title">
                "Photography is the art of frozen time... the ability to store emotion and feelings within a frame, creating windows to moments that transcend the ordinary."
              </blockquote>
              <cite className="text-muted-foreground font-light text-lg">— Philosophy of the Lightkeeper</cite>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;