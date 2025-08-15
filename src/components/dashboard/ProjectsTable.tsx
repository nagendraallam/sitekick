"use client";

import { useState } from "react";
import { IProject } from "@/models/Project";

interface ProjectsTableProps {
  projects: IProject[];
  onEdit: (project: IProject) => void;
  onDelete: (projectId: string) => void;
  onShowCode: (project: IProject) => void;
  onCreateNew: () => void;
}

export default function ProjectsTable({
  projects,
  onEdit,
  onDelete,
  onShowCode,
  onCreateNew,
}: ProjectsTableProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (projectId: string, projectName: string) => {
    if (
      !confirm(
        `Are you sure you want to delete "${projectName}"? This action cannot be undone.`
      )
    ) {
      return;
    }

    setDeletingId(projectId);
    try {
      await onDelete(projectId);
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return url;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-base-content">
            Your Projects
          </h2>
          <p className="text-base-content/60 mt-1">
            Manage your AI chatbots and embed codes
          </p>
        </div>
        <button onClick={onCreateNew} className="btn btn-primary gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Project
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Project</th>
              <th>Website</th>
              <th>AI Assistant</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id as string} className="hover">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div>
                      <div className="font-semibold">{project.name}</div>
                      {project.description && (
                        <div className="text-sm text-base-content/60 truncate max-w-xs">
                          {project.description}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {formatUrl(project.url)}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-base-content/60 hover:text-primary"
                    >
                      Visit site ↗
                    </a>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="avatar placeholder">
                      <div className="bg-primary text-primary-content rounded-full w-8">
                        <span className="text-xs font-semibold">
                          {project.aiName?.charAt(0)?.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <span className="font-medium">{project.aiName}</span>
                  </div>
                </td>
                <td>
                  <span
                    className={`badge ${
                      project.isActive ? "badge-success" : "badge-error"
                    }`}
                  >
                    {project.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="text-sm text-base-content/60">
                  {formatDate(project.createdAt as unknown as string)}
                </td>
                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onShowCode(project)}
                      className="btn btn-sm btn-outline btn-primary"
                      title="Get embed code"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => onEdit(project)}
                      className="btn btn-sm btn-outline"
                      title="Edit project"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        handleDelete(project._id as string, project.name)
                      }
                      className="btn btn-sm btn-outline btn-error"
                      disabled={deletingId === (project._id as string)}
                      title="Delete project"
                    >
                      {deletingId === (project._id as string) ? (
                        <span className="loading loading-spinner loading-xs"></span>
                      ) : (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
          <p className="text-base-content/60 mb-6">
            Create your first AI chatbot project to get started
          </p>
          <button onClick={onCreateNew} className="btn btn-primary">
            Create Your First Project
          </button>
        </div>
      )}
    </div>
  );
}
