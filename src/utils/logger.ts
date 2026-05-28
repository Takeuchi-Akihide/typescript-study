export function logInfo(message: string, context?: unknown): void {
  if (import.meta.env.DEV) {
    console.info(`[INFO] ${message}`, context ?? "");
  }
}

export function logError(message: string, context?: unknown): void {
  console.error(`[ERROR] ${message}`, context ?? "");
}
