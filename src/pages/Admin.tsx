import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Plus, Trash2, User } from "lucide-react";

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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
            <p className="text-muted-foreground">Magic Builders Consultancy</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-primary">
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You do not have admin privileges.
          </p>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 w-4 h-4" />
            Logout
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MBC Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              {user.email}
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="mr-2 w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-8">
            {/* Create Project Form */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5" />
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
                <Button type="submit" className="bg-gradient-primary">
                  <Plus className="mr-2 w-4 h-4" />
                  Create Project
                </Button>
              </form>
            </Card>

            {/* Projects List */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Existing Projects</h2>
              {projects.map((project) => (
                <Card key={project.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.client} • {project.category}
                      </p>
                      <p className="mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag: string, idx: number) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
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
            <h2 className="text-xl font-bold">Contact Submissions</h2>
            {contactSubmissions.map((submission) => (
              <Card key={submission.id} className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold">{submission.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {submission.email}
                        {submission.company && ` • ${submission.company}`}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={
                          submission.status === "completed"
                            ? "default"
                            : "outline"
                        }
                        onClick={() =>
                          handleUpdateSubmissionStatus(
                            submission.id,
                            "completed"
                          )
                        }
                      >
                        Completed
                      </Button>
                      <Button
                        size="sm"
                        variant={
                          submission.status === "in-progress"
                            ? "default"
                            : "outline"
                        }
                        onClick={() =>
                          handleUpdateSubmissionStatus(
                            submission.id,
                            "in-progress"
                          )
                        }
                      >
                        In Progress
                      </Button>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{submission.message}</p>
                  <p className="text-xs text-muted-foreground">
                    Submitted:{" "}
                    {new Date(submission.created_at).toLocaleString()}
                  </p>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
