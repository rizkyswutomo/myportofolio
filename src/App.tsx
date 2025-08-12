import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Star,
  MapPin,
  Calendar,
  Award,
  Users,
  Brain,
  Target,
  TrendingUp,
  CheckCircle,
  Phone,
  BookOpen,
  BarChart3,
  Shield,
  Heart,
  PieChart,
  FileText
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'expertise', 'projects', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "Employee Engagement Initiative",
      category: "Organizational Psychology",
      description: "Designed and implemented a comprehensive employee engagement program based on psychological principles, resulting in 32% increase in satisfaction scores and 25% reduction in turnover.",
      metrics: { satisfaction: "+32%", retention: "+25%", productivity: "+18%" },
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Survey Analysis", "SPSS", "Employee Analytics", "Workshop Design"],
      link: "#"
    },
    {
      id: 2,
      title: "Talent Acquisition Optimization",
      category: "Recruitment Psychology",
      description: "Revolutionized hiring process using behavioral psychology and data analytics, improving candidate quality by 40% and reducing time-to-hire by 35%.",
      metrics: { quality: "+40%", time: "-35%", cost: "-28%" },
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Psychometric Testing", "ATS Integration", "Behavioral Interviewing", "Data Analysis"],
      link: "#"
    },
    {
      id: 3,
      title: "Leadership Development Program",
      category: "Executive Psychology",
      description: "Created evidence-based leadership development curriculum incorporating cognitive behavioral techniques, training 150+ managers with 95% completion rate.",
      metrics: { completion: "95%", satisfaction: "4.8/5", promotion: "+22%" },
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["360 Assessments", "CBT Principles", "Learning Management", "Performance Tracking"],
      link: "#"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "VP of Operations, TechCorp Inc.",
      content: "His psychological insights transformed our HR approach. The employee engagement program delivered exceptional results and created a more positive workplace culture.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    },
    {
      name: "David Chen",
      role: "CEO, InnovatePlus",
      content: "Outstanding strategic thinking and implementation. His data-driven approach to talent management helped us build a stronger, more engaged team.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Head of Talent, GlobalTech",
      content: "A true HR professional who understands the psychological aspects of workplace dynamics. His programs consistently deliver measurable results.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    }
  ];

  const expertise = [
    { 
      name: "Organizational Psychology", 
      level: 95, 
      icon: Brain,
      description: "Applied psychology principles to improve workplace dynamics"
    },
    { 
      name: "Talent Management", 
      level: 92, 
      icon: Users,
      description: "Strategic recruitment, development, and retention programs"
    },
    { 
      name: "Data Analytics", 
      level: 88, 
      icon: BarChart3,
      description: "HR metrics analysis and predictive modeling"
    },
    { 
      name: "Change Management", 
      level: 90, 
      icon: Target,
      description: "Organizational transformation and culture development"
    }
  ];

  const certifications = [
    { name: "Master of Science in Psychology", institution: "Stanford University" },
    { name: "SHRM-SCP Certification", institution: "Society for Human Resource Management" },
    { name: "Certified Professional in Learning and Performance", institution: "ATD" },
    { name: "Predictive Analytics Certificate", institution: "MIT Professional Education" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-900">
              Portofolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'expertise', 'projects', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-100">
              {['home', 'about', 'expertise', 'projects', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-blue-600 font-medium text-lg">HR Professional & Organizational Psychologist</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Rizky Setyaji Wahyu Utomo
                </h1>
                <p className="text-xl text-gray-600">
                  Psychology-Driven Human Resources Leadership
                </p>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Leveraging psychology principles and data analytics to transform organizations, 
                enhance employee engagement, and drive business results through strategic human resource management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  View My Impact
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Connect with Me
                </button>
              </div>
              
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Mail size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Phone size={24} />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional headshot"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With a Master's in Psychology and 12+ years in Human Resources, I bridge the gap between 
                  human behavior science and business strategy. My approach combines psychological insights 
                  with data-driven methodologies to create high-performing, engaged workforces.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Based in San Francisco Bay Area</p>
                    <p className="text-gray-600">Open to remote and hybrid opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Award className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">SHRM-SCP Certified</p>
                    <p className="text-gray-600">Senior Certified Professional designation</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calendar className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">12+ Years Experience</p>
                    <p className="text-gray-600">Psychology-informed HR leadership</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Philosophy</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Brain className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Psychology-First Approach</h4>
                    <p className="text-gray-600">Understanding human behavior to design effective HR strategies and policies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BarChart3 className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data-Driven Decisions</h4>
                    <p className="text-gray-600">Using analytics and metrics to measure success and continuously improve outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Employee-Centric Focus</h4>
                    <p className="text-gray-600">Prioritizing employee wellbeing and engagement as drivers of business success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combining psychological principles with strategic HR leadership to drive organizational success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {expertise.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <IconComponent className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{skill.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Proficiency Level</span>
                      <span className="font-medium text-gray-900">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Education & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                    <p className="text-gray-600 text-sm">{cert.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact & Results</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic HR initiatives that delivered measurable business outcomes through psychology-driven approaches
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-blue-50 rounded-lg">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 group/link"
                  >
                    View Case Study
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional References</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Feedback from leadership and colleagues on the impact of psychology-driven HR strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-blue-600 fill-current" size={20} />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your organization through psychology-driven HR strategies? 
              I'd love to discuss how we can work together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:michael.thompson@email.com" className="text-blue-600 hover:text-blue-700">
                        michael.thompson@email.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+14155551234" className="text-blue-600 hover:text-blue-700">
                        (415) 555-1234
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Linkedin className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <a href="#" className="text-blue-600 hover:text-blue-700">
                        /in/michaelthompsonhr
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Open to Opportunities</h4>
                <p className="text-gray-600 mb-4">
                  Currently exploring senior HR leadership roles where I can apply psychology principles 
                  to drive organizational transformation and employee engagement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">HR Director</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">VP People</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Consulting</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="HR Partnership Opportunity"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell me about your HR challenges and objectives..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-2xl font-bold text-white">
                Rizky Setyaji Wahyu Utomo
              </p>
              <p className="text-blue-200 mt-1">HR Professional & Organizational Psychologist</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Mail size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Rizky Setyaji Wahyu Utomo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;