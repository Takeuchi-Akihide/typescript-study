import type { ApiResult, User } from "../types";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown error";
}

export async function fetchUsers(): Promise<ApiResult<User[]>> {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);

    if (!response.ok) {
      return {
        ok: false,
        error: "Failed to fetch users",
        status: response.status
      };
    }

    const users = await response.json();

    return {
      ok: true,
      data: users,
    };
  } catch (error: unknown) {
    return {
      ok: false,
      error: getErrorMessage(error),
    };
  }
}

export async function fetchUserById(id: number): Promise<ApiResult<User>> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        return {
          ok: false,
          error: `User not found: ${id}`,
          status: response.status,
        };
      }
      return {
        ok: false,
        error: "Failed to fetch user",
        status: response.status,
      };
    }

    const user = await response.json();

    return {
      ok: true,
      data: user,
    };

  } catch (error: unknown) {
    return {
      ok: false,
      error: getErrorMessage(error),
    };
  }
}

export async function createUser(name: string, email: string): Promise<ApiResult<User>> {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email })
    });

    if (!response.ok) {
      return {
        ok: false,
        error: "Failed to create user",
        status: response.status,
      };
    }

    const user: User = await response.json();
    return {
      ok: true,
      data: user,
    };
  } catch (error: unknown) {
    return {
      ok: false,
      error: getErrorMessage(error),
    };
  }
}

export async function deleteUser(id: number): Promise<ApiResult<void>> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      return {
        ok: false,
        error: "Failed to delete user",
        status: response.status,
      };
    }

    return {
      ok: true,
      data: undefined,
    };
  } catch (error: unknown) {
    return {
      ok: false,
      error: getErrorMessage(error),
    };
  }
}