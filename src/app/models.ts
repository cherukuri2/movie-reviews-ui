export interface ReviewRequest {
  prompt: string;
  provider?: 'openai' | 'ollama';
  model?: string;
}
export interface MovieMatch {
  title: string;
  year?: number;
  synopsis: string;
  review: string;
  confidence?: number;
}
export interface ReviewResponse {
  provider: string;
  model: string;
  promptEcho: string;
  matches: MovieMatch[];
}
