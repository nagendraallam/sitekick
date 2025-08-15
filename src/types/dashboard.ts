export interface ProjectFormData {
  name: string;
  url: string;
  aiName: string;
  description?: string;
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  isActive?: boolean;
}

export interface EmbedConfig {
  projectId: string;
  aiName: string;
  position: string;
  isActive: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ProjectsResponse {
  projects: import('@/models/Project').IProject[];
}

export interface ProjectResponse {
  project: import('@/models/Project').IProject;
}
