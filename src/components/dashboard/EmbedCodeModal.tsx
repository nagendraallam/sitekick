"use client";

import { useState } from "react";
import { IProject } from "@/models/Project";

interface EmbedCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: IProject | null;
}

export default function EmbedCodeModal({
  isOpen,
  onClose,
  project,
}: EmbedCodeModalProps) {
  const [copied, setCopied] = useState(false);

  const generateEmbedCode = (project: IProject) => {
    const config = {
      projectId: project._id,
      aiName: project.aiName,
      position: project.position,
      isActive: project.isActive,
    };

    return `<!-- SiteKick AI Chatbot -->
<script>
  window.SiteKickConfig = ${JSON.stringify(config, null, 2)};
</script>
<script async src="https://ai-chatbot.sitekick.com/embed.js"></script>
<!-- End SiteKick AI Chatbot -->`;
  };

  const handleCopy = async () => {
    if (!project) return;

    try {
      await navigator.clipboard.writeText(generateEmbedCode(project));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleClose = () => {
    setCopied(false);
    onClose();
  };

  if (!isOpen || !project) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-bold text-lg">Embed Code</h3>
            <p className="text-sm text-base-content/60 mt-1">
              Copy and paste this code into your website's HTML to add SiteKick
            </p>
          </div>
          <button
            className="btn btn-sm btn-circle btn-ghost"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <h4 className="font-semibold">How to install:</h4>
              <p className="text-sm">
                Paste this code right before the closing &lt;/body&gt; tag in
                your HTML.
              </p>
            </div>
          </div>

          <div className="relative">
            <pre className="bg-base-200 p-4 rounded-lg text-sm overflow-x-auto border">
              <code>{generateEmbedCode(project)}</code>
            </pre>
            <button
              onClick={handleCopy}
              className={`btn btn-sm absolute top-2 right-2 ${
                copied ? "btn-success" : "btn-outline"
              }`}
            >
              {copied ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 ">
            <div className="card bg-base-100 border">
              <div className="card-body p-4">
                <h4 className="font-semibold text-sm">Quick Tips</h4>
                <div className="space-y-2 text-sm text-base-content/80">
                  <p>• Place the code before &lt;/body&gt;</p>
                  <p>• The chatbot will appear on all pages</p>
                  <p>• You can edit settings anytime</p>
                  <p>• Toggle active status to show/hide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-action">
          <button className="btn btn-ghost" onClick={handleClose}>
            Close
          </button>
          <button
            className="btn btn-primary btn-outline rounded-md"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </div>
    </div>
  );
}
