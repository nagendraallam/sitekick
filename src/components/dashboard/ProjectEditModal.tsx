"use client";

import { useState, useEffect } from "react";
import { IProject } from "@/models/Project";

interface ProjectEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (project: IProject) => void;
  project: IProject | null;
}

export default function ProjectEditModal({
  isOpen,
  onClose,
  onSuccess,
  project,
}: ProjectEditModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    aiName: "",
    description: "",
    position: "bottom-right" as
      | "bottom-right"
      | "bottom-left"
      | "top-right"
      | "top-left",
    isActive: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (project && isOpen) {
      setFormData({
        name: project.name || "",
        url: project.url || "",
        aiName: project.aiName || "",
        description: project.description || "",
        position: project.position as
          | "bottom-right"
          | "bottom-left"
          | "top-right"
          | "top-left",
        isActive: project.isActive !== undefined ? project.isActive : true,
      });
    }
  }, [project, isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/projects/${project._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update project");
      }

      onSuccess(data.project);
      handleClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setError("");
    onClose();
  };

  if (!isOpen || !project) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-base-content mb-2">
            Edit Project
          </h2>
          <p className="text-base-content/60 text-sm">
            Update your chatbot settings and configuration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}

          {/* Status Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-base-content border-b border-base-300 pb-2">
              Status
            </h3>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleInputChange}
                  className="checkbox checkbox-primary"
                  disabled={isLoading}
                />
                <div>
                  <span className="label-text font-medium">Active</span>
                  <p className="text-xs text-base-content/60">
                    When disabled, the chatbot won&apos;t appear on your website
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Project Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-base-content border-b border-base-300 pb-2">
              Project Details
            </h3>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Project Name *</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="My Website"
                className="input input-bordered w-full"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Website URL *</span>
              </label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                placeholder="https://mywebsite.com"
                className="input input-bordered w-full"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  AI Assistant Name *
                </span>
              </label>
              <input
                type="text"
                name="aiName"
                value={formData.aiName}
                onChange={handleInputChange}
                placeholder="Alex"
                className="input input-bordered w-full"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Configuration Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-base-content border-b border-base-300 pb-2">
              Configuration
            </h3>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Chatbot Position</span>
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className="select select-bordered w-full"
                disabled={isLoading}
              >
                <option value="bottom-right">Bottom Right</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="top-right">Top Right</option>
                <option value="top-left">Top Left</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Description (Optional)
                </span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief description of your website or chatbot purpose..."
                className="textarea textarea-bordered w-full h-20 resize-none"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              className="btn btn-ghost flex-1"
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary flex-1"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Updating...
                </>
              ) : (
                "Update Project"
              )}
            </button>
          </div>
        </form>

        {/* Close button */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={handleClose}
          disabled={isLoading}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
