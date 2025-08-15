"use client";

import { useState } from "react";
import { IProject } from "@/models/Project";

interface ProjectCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (project: IProject) => void;
  isFirstProject?: boolean;
}

export default function ProjectCreationModal({
  isOpen,
  onClose,
  onSuccess,
  isFirstProject = false,
}: ProjectCreationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    aiName: "",
    description: "",
    position: "bottom-right" as const,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showConfiguration, setShowConfiguration] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create project");
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
    setFormData({
      name: "",
      url: "",
      aiName: "",
      description: "",
      position: "bottom-right",
    });
    setError("");
    setShowConfiguration(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-base-content mb-2">
            {isFirstProject
              ? "Create Your First Chatbot"
              : "Create New Project"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}

          {/* Project Details Section */}
          <div className="space-y-4">
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

          {/* Configuration Section Toggle */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setShowConfiguration(!showConfiguration)}
              className="flex items-center justify-between w-full text-left"
              disabled={isLoading}
            >
              <h3 className="text-sm font-normal text-base-content/70">
                Advanced Configuration (Optional)
              </h3>
              <svg
                className={`w-4 h-4 transition-transform ${
                  showConfiguration ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showConfiguration && (
              <div className="space-y-4 pl-4 border-l-2 border-base-300">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Chatbot Position
                    </span>
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
            )}
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
                  Creating...
                </>
              ) : (
                "Create Project"
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
