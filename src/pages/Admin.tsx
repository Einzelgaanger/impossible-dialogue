import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, User, Mail, Building2, Calendar, CheckCircle2, Clock, Home, Settings, BarChart3, Users, DollarSign, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Admin = () => {
  const { toast } = useToast();
  
  // Hardcoded admin details
  const adminDetails = {
    name: "Magic Builders Admin",
    email: "admin@magicbuilders.com",
    role: "Administrator",
    lastLogin: "2024-01-15 14:30:00",
    permissions: ["projects", "contacts", "analytics", "settings"]
  };

  // Hardcoded projects data
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "AI-Powered Healthcare Database",
      client: "MedTech Solutions",
      category: "AI Database Systems",
      description: "Implemented a comprehensive AI database system for healthcare data management with natural language querying capabilities.",
      impact: [
        "67% reduction in data retrieval time",
        "Zero data breaches in 18 months",
        "95% user satisfaction rate",
        "40% increase in operational efficiency"
      ],
      tags: ["Healthcare", "AI", "Database", "Security"],
      status: "completed",
      created_at: "2024-01-10T10:00:00Z",
      budget: "$150,000",
      duration: "6 months"
    },
    {
      id: "2",
      title: "E-commerce Platform Modernization",
      client: "RetailCorp International",
      category: "Software Development",
      description: "Complete overhaul of legacy e-commerce platform with modern React architecture and microservices.",
      impact: [
        "300% increase in page load speed",
        "50% reduction in bounce rate",
        "200% increase in mobile conversions",
        "99.9% uptime achieved"
      ],
      tags: ["E-commerce", "React", "Microservices", "Performance"],
      status: "in-progress",
      created_at: "2024-01-05T09:00:00Z",
      budget: "$200,000",
      duration: "8 months"
    },
    {
      id: "3",
      title: "Financial Data Analytics Dashboard",
      client: "FinanceFirst Bank",
      category: "Data Analysis",
      description: "Advanced analytics dashboard for real-time financial data processing and predictive modeling.",
      impact: [
        "Real-time data processing",
        "85% accuracy in fraud detection",
        "30% reduction in manual reporting time",
        "Compliance with all regulatory requirements"
      ],
      tags: ["Finance", "Analytics", "Dashboard", "Compliance"],
      status: "completed",
      created_at: "2023-12-20T14:00:00Z",
      budget: "$120,000",
      duration: "4 months"
    }
  ]);

  // Hardcoded contact submissions
  const [contactSubmissions, setContactSubmissions] = useState([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@techcorp.com",
      company: "TechCorp Solutions",
      phone: "+1-555-0123",
      message: "We're looking for a comprehensive AI solution to streamline our customer service operations. Our current system is outdated and we need something that can handle multiple languages and integrate with our existing CRM.",
      status: "in-progress",
      priority: "high",
      created_at: "2024-01-15T10:30:00Z",
      estimated_budget: "$75,000 - $100,000",
      timeline: "3-4 months"
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "m.chen@startup.io",
      company: "StartupIO",
      phone: "+1-555-0456",
      message: "We need help building a data analytics platform for our SaaS product. We have a lot of user data but don't know how to extract meaningful insights from it.",
      status: "pending",
      priority: "medium",
      created_at: "2024-01-14T16:45:00Z",
      estimated_budget: "$50,000 - $75,000",
      timeline: "2-3 months"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily@healthcareplus.com",
      company: "Healthcare Plus",
      phone: "+1-555-0789",
      message: "Our hospital needs a secure database system for patient records with AI-powered search capabilities. Compliance with HIPAA is critical.",
      status: "completed",
      priority: "high",
      created_at: "2024-01-12T11:20:00Z",
      estimated_budget: "$100,000 - $150,000",
      timeline: "6 months"
    }
  ]);

  // New project form state
  const [newProject, setNewProject] = useState({
    title: "",
    client: "",
    category: "",
    description: "",
    impact: "",
    tags: "",
    budget: "",
    duration: ""
  });

  // Analytics data
  const analytics = {
    totalProjects: projects.length,
    completedProjects: projects.filter(p => p.status === "completed").length,
    inProgressProjects: projects.filter(p => p.status === "in-progress").length,
    totalRevenue: "$470,000",
    pendingSubmissions: contactSubmissions.filter(s => s.status === "pending").length,
    completedSubmissions: contactSubmissions.filter(s => s.status === "completed").length,
    averageProjectValue: "$156,667",
    clientSatisfaction: "98%"
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectData = {
      id: (projects.length + 1).toString(),
      title: newProject.title,
      client: newProject.client,
      category: newProject.category,
      description: newProject.description,
      impact: newProject.impact.split("\n").filter(i => i.trim()),
      tags: newProject.tags.split(",").map(t => t.trim()).filter(t => t),
      status: "in-progress",
      created_at: new Date().toISOString(),
      budget: newProject.budget,
      duration: newProject.duration
    };

    setProjects([projectData, ...projects]);
    
    toast({
      title: "Success",
      description: "Project created successfully",
    });
    
    setNewProject({
      title: "",
      client: "",
      category: "",
      description: "",
      impact: "",
      tags: "",
      budget: "",
      duration: ""
    });
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({
      title: "Success",
      description: "Project deleted successfully",
    });
  };

  const handleUpdateSubmissionStatus = (id: string, status: string) => {
    setContactSubmissions(contactSubmissions.map(s => 
      s.id === id ? { ...s, status } : s
    ));
    toast({
      title: "Success",
      description: "Status updated successfully",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">Magic Builders Consultancy</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm bg-muted/50 px-4 py-2 rounded-full">
              <User className="w-4 h-4 text-primary" />
              <span className="text-foreground">{adminDetails.email}</span>
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              <Home className="mr-2 w-4 h-4" />
              Back to Site
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Projects</p>
                <p className="text-2xl font-bold">{analytics.totalProjects}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
          </Card>
          
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">{analytics.totalRevenue}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </Card>
          
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                <p className="text-2xl font-bold">{analytics.clientSatisfaction}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
          </Card>
          
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Submissions</p>
                <p className="text-2xl font-bold">{analytics.pendingSubmissions}</p>
              </div>
              <Users className="w-8 h-8 text-orange-500" />
            </div>
          </Card>
        </div>

        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="bg-card/80 backdrop-blur-sm border border-border/50 p-1">
            <TabsTrigger value="projects" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              Projects ({projects.length})
            </TabsTrigger>
            <TabsTrigger value="contacts" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              Contact Submissions ({contactSubmissions.length})
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-8">
            {/* Create Project Form */}
            <Card className="p-6 shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Plus className="w-5 h-5 text-primary-foreground" />
                </div>
                Add New Project
              </h2>
              <form onSubmit={handleCreateProject} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Title</label>
                    <Input
                      value={newProject.title}
                      onChange={(e) =>
                        setNewProject({ ...newProject, title: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Client</label>
                    <Input
                      value={newProject.client}
                      onChange={(e) =>
                        setNewProject({ ...newProject, client: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <Input
                      value={newProject.category}
                      onChange={(e) =>
                        setNewProject({ ...newProject, category: e.target.value })
                      }
                      placeholder="e.g., AI Database Systems"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Budget</label>
                    <Input
                      value={newProject.budget}
                      onChange={(e) =>
                        setNewProject({ ...newProject, budget: e.target.value })
                      }
                      placeholder="e.g., $50,000"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Duration</label>
                    <Input
                      value={newProject.duration}
                      onChange={(e) =>
                        setNewProject({ ...newProject, duration: e.target.value })
                      }
                      placeholder="e.g., 3 months"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={newProject.description}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Impact (one per line)
                  </label>
                  <Textarea
                    value={newProject.impact}
                    onChange={(e) =>
                      setNewProject({ ...newProject, impact: e.target.value })
                    }
                    placeholder="67% reduction in data retrieval time&#10;Zero data breaches in 18 months"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Tags (comma separated)
                  </label>
                  <Input
                    value={newProject.tags}
                    onChange={(e) =>
                      setNewProject({ ...newProject, tags: e.target.value })
                    }
                    placeholder="Healthcare, AI, WhatsApp Integration"
                    required
                  />
                </div>
                <Button type="submit" className="bg-gradient-primary hover:opacity-90 transition-opacity h-11">
                  <Plus className="mr-2 w-4 h-4" />
                  Create Project
                </Button>
              </form>
            </Card>

            {/* Projects List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">All Projects</h2>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    {analytics.completedProjects} Completed
                  </Badge>
                  <Badge variant="outline" className="text-base px-3 py-1">
                    {analytics.inProgressProjects} In Progress
                  </Badge>
                </div>
              </div>
              {projects.map((project) => (
                <Card key={project.id} className="p-6 shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Building2 className="w-3.5 h-3.5" />
                              {project.client}
                            </span>
                            <span>•</span>
                            <span>{project.category}</span>
                            <span>•</span>
                            <span>{project.budget}</span>
                            <span>•</span>
                            <span>{project.duration}</span>
                          </div>
                        </div>
                        <Badge 
                          variant={project.status === "completed" ? "default" : "secondary"}
                          className="capitalize"
                        >
                          {project.status === "in-progress" ? "In Progress" : project.status}
                        </Badge>
                      </div>
                      <p className="text-foreground/80">{project.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">Key Impacts:</h4>
                        <ul className="space-y-1">
                          {project.impact.map((impact, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag: string, idx: number) => (
                          <Badge key={idx} variant="secondary" className="text-xs px-2.5 py-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Contact Submissions</h2>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-base px-3 py-1">
                  {analytics.pendingSubmissions} Pending
                </Badge>
                <Badge variant="default" className="text-base px-3 py-1">
                  {analytics.completedSubmissions} Completed
                </Badge>
              </div>
            </div>
            {contactSubmissions.map((submission) => (
              <Card key={submission.id} className="p-6 shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-colors">
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{submission.name}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5" />
                          {submission.email}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {submission.company}
                        </span>
                        <span>•</span>
                        <span>{submission.phone}</span>
                        <span>•</span>
                        <span className="font-medium">{submission.estimated_budget}</span>
                        <span>•</span>
                        <span>{submission.timeline}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge 
                        variant={submission.status === "completed" ? "default" : submission.status === "in-progress" ? "secondary" : "outline"}
                        className="capitalize"
                      >
                        {submission.status === "in-progress" ? "In Progress" : submission.status}
                      </Badge>
                      <Badge 
                        variant={submission.priority === "high" ? "destructive" : submission.priority === "medium" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {submission.priority} priority
                      </Badge>
                    </div>
                  </div>
                  <p className="text-foreground/80 border-l-2 border-primary/30 pl-4 py-2 bg-muted/30 rounded-r">
                    {submission.message}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(submission.created_at).toLocaleDateString()} at{" "}
                      {new Date(submission.created_at).toLocaleTimeString()}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={submission.status === "in-progress" ? "default" : "outline"}
                        className={submission.status === "in-progress" ? "bg-secondary text-secondary-foreground" : ""}
                        onClick={() =>
                          handleUpdateSubmissionStatus(
                            submission.id,
                            "in-progress"
                          )
                        }
                      >
                        <Clock className="mr-1.5 w-3.5 h-3.5" />
                        In Progress
                      </Button>
                      <Button
                        size="sm"
                        variant={submission.status === "completed" ? "default" : "outline"}
                        className={submission.status === "completed" ? "bg-gradient-primary text-primary-foreground" : ""}
                        onClick={() =>
                          handleUpdateSubmissionStatus(
                            submission.id,
                            "completed"
                          )
                        }
                      >
                        <CheckCircle2 className="mr-1.5 w-3.5 h-3.5" />
                        Completed
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-bold mb-4">Project Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Projects</span>
                    <span className="font-bold">{analytics.totalProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-bold text-green-500">{analytics.completedProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">In Progress</span>
                    <span className="font-bold text-blue-500">{analytics.inProgressProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Project Value</span>
                    <span className="font-bold">{analytics.averageProjectValue}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-bold mb-4">Contact Submissions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Submissions</span>
                    <span className="font-bold">{contactSubmissions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pending</span>
                    <span className="font-bold text-orange-500">{analytics.pendingSubmissions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-bold text-green-500">{analytics.completedSubmissions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client Satisfaction</span>
                    <span className="font-bold text-green-500">{analytics.clientSatisfaction}</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-lg font-bold mb-4">Revenue Overview</h3>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {analytics.totalRevenue}
                </div>
                <p className="text-muted-foreground">Total Revenue Generated</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;