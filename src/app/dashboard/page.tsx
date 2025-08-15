"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { IProject } from "@/models/Project";
import GetStartedView from "@/components/dashboard/GetStartedView";
import ProjectsTable from "@/components/dashboard/ProjectsTable";
import ProjectCreationModal from "@/components/dashboard/ProjectCreationModal";
import ProjectEditModal from "@/components/dashboard/ProjectEditModal";
import EmbedCodeModal from "@/components/dashboard/EmbedCodeModal";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/");
    }
  }, [status]);

  useEffect(() => {
    if (session) {
      fetchProjects();
    }
  }, [session]);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      if (response.ok) {
        const data = await response.json();
        setProjects(data.projects || []);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = (project: IProject) => {
    setProjects((prev) => [project, ...prev]);
  };

  const handleUpdateProject = (updatedProject: IProject) => {
    setProjects((prev) =>
      prev.map((p) => (p._id === updatedProject._id ? updatedProject : p))
    );
  };

  const handleDeleteProject = async (projectId: string) => {
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProjects((prev) => prev.filter((p) => p._id !== projectId));
      } else {
        throw new Error("Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project. Please try again.");
    }
  };

  const handleEditProject = (project: IProject) => {
    setSelectedProject(project);
    setShowEditModal(true);
  };

  const handleShowCode = (project: IProject) => {
    setSelectedProject(project);
    setShowCodeModal(true);
  };

  const handleCreateNew = () => {
    setShowCreateModal(true);
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const hasProjects = projects.length > 0;

  return (
    <div className=" pt-20 px-8">
      <div className="max-w-7xl mx-auto">
        {hasProjects ? (
          <div className="space-y-8 pt-10 pb-10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-base-content mb-2">
                Welcome back, {session.user?.name?.split(" ")[0]}!
              </h1>
              <p className="text-base-content/60">
                Manage your AI chatbots and track their performance
              </p>
            </div>

            <ProjectsTable
              projects={projects}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
              onShowCode={handleShowCode}
              onCreateNew={handleCreateNew}
            />
          </div>
        ) : (
          <GetStartedView onCreateProject={handleCreateNew} />
        )}

        {/* Modals */}
        <ProjectCreationModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onSuccess={handleCreateProject}
          isFirstProject={!hasProjects}
        />

        <ProjectEditModal
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false);
            setSelectedProject(null);
          }}
          onSuccess={handleUpdateProject}
          project={selectedProject}
        />

        <EmbedCodeModal
          isOpen={showCodeModal}
          onClose={() => {
            setShowCodeModal(false);
            setSelectedProject(null);
          }}
          project={selectedProject}
        />
      </div>
    </div>
  );
}
