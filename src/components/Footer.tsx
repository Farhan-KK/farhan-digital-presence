
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-10 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">Let's Connect</h3>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                I'm always interested in new opportunities, collaborations, and interesting projects. 
                Feel free to reach out if you'd like to discuss backend development, cloud technologies, 
                or event production.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Mail className="mr-2 h-4 w-4" />
                farhanmonksa@gmail.com
              </Button>
              <a
                href="https://github.com/Farhan-KK"
                target="_blank"
                rel="noopener,noreferrer">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammed-farhan-calicut/"
                target="_blank"
                rel="noopener noreferrer">  
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm">
                © 2024 Muahammed Farhan. Built with modern web technologies.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
