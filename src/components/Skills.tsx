
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Settings, Palette, Video, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C++", "Golang"],
    color: "text-blue-600"
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS"],
    color: "text-green-600"
  },
  {
    title: "Developer Tools",
    icon: Settings,
    skills: ["VS Code", "GitHub"],
    color: "text-purple-600"
  },
  {
    title: "Design Tools",
    icon: Palette,
    skills: ["Figma", "Adobe Photoshop", "Lightroom Classic"],
    color: "text-pink-600"
  },
  {
    title: "Video Editing",
    icon: Video,
    skills: ["CapCut", "VN"],
    color: "text-orange-600"
  }
];

const softSkills = [
  "Leadership",
  "Communication", 
  "Problem Solving",
  "Teamwork"
];

const certifications = [
  "Getting Started with AI – IBM SkillsBuild",
  "Fundamentals of Artificial Intelligence – IBM SkillsBuild"
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
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills & Certifications */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="portfolio-card-hover border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Award className="h-6 w-6 text-yellow-600" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg text-center font-medium text-foreground"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="portfolio-card-hover border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Award className="h-6 w-6 text-emerald-600" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg"
                  >
                    <p className="font-medium text-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
