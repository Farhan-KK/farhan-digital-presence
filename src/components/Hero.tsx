import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat opacity-10 bg-cover bg-center sm:bg-[position:center_top]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        }}
      />
      
      {/* Image on mobile */}
      <div className="block md:hidden relative z-10 mb-6">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E22AQECoWpjkC3hGg/feedshare-shrink_1280/feedshare-shrink_1280/0/1729766656191?e=1752710400&v=beta&t=flQyWktmfIozT1UFcWQTU3o34CcVbWhOeRy_SZsCj2g"
          alt="MUHAMMED FARHAN"
          className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        {/* Image on desktop */}
        <div className="hidden md:block">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E22AQECoWpjkC3hGg/feedshare-shrink_1280/feedshare-shrink_1280/0/1729766656191?e=1752710400&v=beta&t=flQyWktmfIozT1UFcWQTU3o34CcVbWhOeRy_SZsCj2g"
            alt="MUHAMMED FARHAN"
            className="w-96 h-96 lg:w-[420px] lg:h-[420px] mx-auto rounded-full object-cover border-4 border-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            MUHAMMED FARHAN
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Backend Developer | Cybersecurity Enthusiast | Production Head
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
          <a
            href="https://drive.google.com/file/d/1qI7nB_eJ0GbS-v4QfIWolN7hmKGWsJbC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <Button size="lg" className="portfolio-gradient hover:opacity-90 transition-opacity">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
          <a
            href="https://github.com/Farhan-KK"
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-farhan-calicut/"
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </a>
          <a
            href="mailto:farhanmonksa@gmail.com"
            rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
