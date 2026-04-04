const API_URL =
  (typeof window !== "undefined" && (window as any).__MOMCONNECT_API_URL) ||
  "http://localhost:4200";

class ApiClient {
  private getToken(): string | null {
    return localStorage.getItem("momconnect-token");
  }

  async fetch(path: string, options: RequestInit = {}): Promise<Response> {
    const token = this.getToken();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...((options.headers as Record<string, string>) || {}),
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return fetch(`${API_URL}${path}`, { ...options, headers });
  }

  async get(path: string) {
    const res = await this.fetch(path);
    if (!res.ok) throw new Error((await res.json()).error || "Request failed");
    return res.json();
  }

  async post(path: string, body: any) {
    const res = await this.fetch(path, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Request failed");
    return data;
  }

  async put(path: string, body: any) {
    const res = await this.fetch(path, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Request failed");
    return data;
  }
}

export const api = new ApiClient();
