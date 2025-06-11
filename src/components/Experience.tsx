
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    type: "Internships & Professional Experience",
    items: [
      {
        company: "Geojit Financial Ltd",
        role: "Software Intern",
        period: "2021–Present",
        location: "Hybrid",
        achievements: [
          "Converted legacy C code to Golang modules to improve performance and maintainability",
          "Collaborated with backend teams for testing, documentation, and migration validation"
        ]
      },
      {
        company: "IBM SkillsBuild",
        role: "AI/ML Internship",
        period: "June 2024 – July 2024",
        location: "Remote",
        achievements: [
          "Completed training in artificial intelligence and machine learning fundamentals",
          "Gained hands-on exposure to real-world AI applications"
        ]
      },
      {
        company: "Gyanholic India Pvt Ltd",
        role: "Data Entry",
        period: "Oct 2023 – Nov 2023",
        location: "Remote",
        achievements: [
          "Performed data processing and management tasks with high accuracy and efficiency"
        ]
      }
    ]
  },
  {
    type: "Leadership & Campus Engagement",
    items: [
      {
        company: "Make-a-ton 7.0 Hackathon",
        role: "Production Head, Organizing Member",
        period: "2024",
        location: "CUSAT",
        achievements: [
          "Led technical and production execution for a national hackathon",
          "Managed logistics, AV setup, and event coordination"
        ]
      },
      {
        company: "TEDxCUSAT",
        role: "Production Head",
        period: "Jan 2024, Mar 2024 – Apr 2025",
        location: "CUSAT",
        achievements: [
          "Oversaw production setup for TEDx events including audio/visual requirements"
        ]
      },
      {
        company: "ACES CUSAT",
        role: "Joint Secretary",
        period: "Feb 2023 – Apr 2024",
        location: "CUSAT",
        achievements: [
          "Organized technical workshops and events under the department association"
        ]
      },
      {
        company: "EOC CUSAT",
        role: "Student Mentor",
        period: "Sept 2021 – Apr 2025",
        location: "CUSAT",
        achievements: [
          "Mentored junior students and provided academic support"
        ]
      }
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {experiences.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
              {category.type}
            </h2>
            
            <div className="grid gap-6 md:gap-8">
              {category.items.map((exp, index) => (
                <Card 
                  key={index} 
                  className="portfolio-card-hover border-none shadow-lg bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-xl md:text-2xl text-foreground flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-primary" />
                          {exp.company}
                        </CardTitle>
                        <p className="text-lg font-medium text-primary">{exp.role}</p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
