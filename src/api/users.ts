import type { ApiResult, User } from "../types";
import { isUser, isUserArray } from "./userValidators";

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

    const data: unknown = await response.json();

    if (!isUserArray(data)) {
      return {
        ok: false,
        error: "Invalid users response",
        status: response.status,
      };
    }

    return {
      ok: true,
      data,
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

    const data :unknown = await response.json();

    if (!isUser(data)) {
      return {
        ok: false,
        error: "Invalid user response",
        status: response.status,
      };
    }

    return {
      ok: true,
      data,
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

    const data: unknown = await response.json();

    if (!isUser(data)) {
      return {
        ok: false,
        error: "Invalied user response",
        status: response.status,
      };
    }

    return {
      ok: true,
      data,
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