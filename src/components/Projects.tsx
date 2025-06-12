
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Autonomous Navigation for Triangular Omni-wheel Mobile Robot using 2D LiDAR",
    description: "Implemented pathfinding and obstacle avoidance using LiDAR data for autonomous robot navigation.",
    tags: ["Robotics", "LiDAR", "Pathfinding", "Autonomous Systems"],
    featured: true
  },
  {
    title: "Bulk Mail Automation Tool",
    description: "Python tool for sending bulk emails without using SMTP services, featuring automated scheduling and template management.",
    tags: ["Python", "Automation", "Email", "Scripting"],
    featured: false
  },
  {
    title: "Phishing Detection System",
    description: "Built a detection system for phishing websites and emails using machine learning algorithms and pattern recognition.",
    tags: ["Machine Learning", "Cybersecurity", "Detection", "Python"],
    featured: false
  }
];

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning robotics, web development, automation, and cybersecurity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`portfolio-card-hover border-none shadow-lg bg-white/80 backdrop-blur-sm ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/*<div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>*/}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
