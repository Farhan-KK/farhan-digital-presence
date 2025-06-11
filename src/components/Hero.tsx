
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')"
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Muahammed Farhan
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Backend Developer | Cloud Enthusiast | Production Head
          </p>
        </div>
        
        <Card className="p-8 portfolio-glass border-none shadow-xl max-w-2xl mx-auto animate-scale-in">
          <p className="text-lg text-foreground leading-relaxed">
            Final-year CS student at CUSAT passionate about building efficient backend systems, 
            working on automation, and leading event tech teams. Currently transforming legacy 
            systems at Geojit Financial Ltd.
          </p>
        </Card>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-in-left">
          <Button size="lg" className="portfolio-gradient hover:opacity-90 transition-opacity">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
