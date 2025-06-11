
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Settings, Palette, Video, ExternalLink } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Golang", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" }
    ],
    color: "text-blue-600"
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ],
    color: "text-green-600"
  },
  {
    title: "Developer Tools",
    icon: Settings,
    skills: [
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ],
    color: "text-purple-600"
  },
  {
    title: "Design Tools",
    icon: Palette,
    skills: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { name: "Lightroom Classic", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" }
    ],
    color: "text-pink-600"
  },
  {
    title: "Video Editing",
    icon: Video,
    skills: [
      { name: "CapCut", logo: "https://img.icons8.com/color/48/capcut.png" },
      { name: "VN", logo: "https://img.icons8.com/color/48/vn-video-editor.png" }
    ],
    color: "text-orange-600"
  }
];

const certifications = [
  {
    title: "Getting Started with AI – IBM SkillsBuild",
    url: "#"
  },
  {
    title: "Fundamentals of Artificial Intelligence – IBM SkillsBuild", 
    url: "#"
  }
];

const Skills = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Technical Skills */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Technical Skills
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="portfolio-card-hover border-none shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex flex-col items-center gap-2 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Certifications
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {certifications.map((cert, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="portfolio-card-hover bg-white/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 max-w-md"
                onClick={() => window.open(cert.url, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                {cert.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
