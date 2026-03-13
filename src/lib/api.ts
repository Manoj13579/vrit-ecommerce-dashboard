export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new ApiError(
        `API Error: ${response.status} ${response.statusText}`,
        response.status
      );
    }

    return (await response.json()) as T;
  } catch (error: any) {
    console.error("🔥 API FETCH ERROR:", error);

    if (error instanceof ApiError) throw error;

    throw new ApiError(error?.message || "Network error occurred.", 500);
  }
}