import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Plus, Trash2, User, Mail, Building2, Calendar, CheckCircle2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Projects state
  const [projects, setProjects] = useState<any[]>([]);
  const [newProject, setNewProject] = useState({
    title: "",
    client: "",
    category: "",
    description: "",
    impact: "",
    tags: "",
  });

  // Contact submissions state
  const [contactSubmissions, setContactSubmissions] = useState<any[]>([]);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setLoading(false);
        return;
      }

      setUser(session.user);

      // Check if user is admin
      const { data: roles } = await supabase
        .from("user_roles")
        .select("*")
        .eq("user_id", session.user.id)
        .eq("role", "admin");

      if (roles && roles.length > 0) {
        setIsAdmin(true);
        loadProjects();
        loadContactSubmissions();
      }

      setLoading(false);
    } catch (error) {
      console.error("Error checking user:", error);
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Logged in successfully",
      });

      checkUser();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAdmin(false);
    navigate("/");
  };

  const loadProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error loading projects",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setProjects(data || []);
    }
  };

  const loadContactSubmissions = async () => {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error loading submissions",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setContactSubmissions(data || []);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectData = {
      title: newProject.title,
      client: newProject.client,
      category: newProject.category,
      description: newProject.description,
      impact: newProject.impact.split("\n").filter(i => i.trim()),
      tags: newProject.tags.split(",").map(t => t.trim()).filter(t => t),
    };

    const { error } = await supabase.from("projects").insert([projectData]);

    if (error) {
      toast({
        title: "Error creating project",
        description: error.message,
        variant: "destructive",
      });
    } else {
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
      });
      loadProjects();
    }
  };

  const handleDeleteProject = async (id: string) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      toast({
        title: "Error deleting project",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Project deleted successfully",
      });
      loadProjects();
    }
  };

  const handleUpdateSubmissionStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("contact_submissions")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Status updated successfully",
      });
      loadContactSubmissions();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
          <p className="text-muted-foreground">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
        <Card className="p-8 max-w-md w-full shadow-elegant border-border/50 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
              <User className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Admin Portal
            </h1>
            <p className="text-muted-foreground">Magic Builders Consultancy</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="h-11"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-11"
                required
              />
            </div>
            <Button type="submit" className="w-full h-11 bg-gradient-primary hover:opacity-90 transition-opacity">
              Sign In to Dashboard
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-destructive/5">
        <Card className="p-8 max-w-md w-full text-center shadow-elegant border-destructive/20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
            <User className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            Your account does not have administrator privileges to access this dashboard.
          </p>
          <Button onClick={handleLogout} variant="outline" className="w-full">
            <LogOut className="mr-2 w-4 h-4" />
            Sign Out
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
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
              <span className="text-foreground">{user.email}</span>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm" className="rounded-full">
              <LogOut className="mr-2 w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="bg-card/80 backdrop-blur-sm border border-border/50 p-1">
            <TabsTrigger value="projects" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              Projects
            </TabsTrigger>
            <TabsTrigger value="contacts" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              Contact Submissions
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
                <Badge variant="secondary" className="text-base px-3 py-1">
                  {projects.length} Total
                </Badge>
              </div>
              {projects.length === 0 ? (
                <Card className="p-12 text-center shadow-elegant border-border/50 bg-card/80">
                  <p className="text-muted-foreground">No projects yet. Create your first one above!</p>
                </Card>
              ) : (
                projects.map((project) => (
                  <Card key={project.id} className="p-6 shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Building2 className="w-3.5 h-3.5" />
                              {project.client}
                            </span>
                            <span>•</span>
                            <span>{project.category}</span>
                          </div>
                        </div>
                        <p className="text-foreground/80">{project.description}</p>
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
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Contact Submissions</h2>
              <Badge variant="secondary" className="text-base px-3 py-1">
                {contactSubmissions.length} Total
              </Badge>
            </div>
            {contactSubmissions.length === 0 ? (
              <Card className="p-12 text-center shadow-elegant border-border/50 bg-card/80">
                <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">No contact submissions yet.</p>
              </Card>
            ) : (
              contactSubmissions.map((submission) => (
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
                          {submission.company && (
                            <>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Building2 className="w-3.5 h-3.5" />
                                {submission.company}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <Badge 
                        variant={submission.status === "completed" ? "default" : submission.status === "in-progress" ? "secondary" : "outline"}
                        className="capitalize"
                      >
                        {submission.status === "in-progress" ? "In Progress" : submission.status}
                      </Badge>
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
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
