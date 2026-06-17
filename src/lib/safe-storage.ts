type WebStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;

let sessionAvailable: boolean | undefined;
let localAvailable: boolean | undefined;

function probeStorage(kind: "local" | "session"): WebStorage | null {
  const cached = kind === "local" ? localAvailable : sessionAvailable;
  if (cached === false) return null;

  try {
    const storage =
      kind === "local" ? window.localStorage : window.sessionStorage;
    const probeKey = "__ok_storage_probe__";
    storage.setItem(probeKey, "1");
    storage.removeItem(probeKey);
    if (kind === "local") localAvailable = true;
    else sessionAvailable = true;
    return storage;
  } catch {
    if (kind === "local") localAvailable = false;
    else sessionAvailable = false;
    return null;
  }
}

export function safeSessionGet(key: string): string | null {
  try {
    return probeStorage("session")?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

export function safeSessionSet(key: string, value: string): boolean {
  try {
    probeStorage("session")?.setItem(key, value);
    return sessionAvailable !== false;
  } catch {
    return false;
  }
}

export function safeLocalGet(key: string): string | null {
  try {
    return probeStorage("local")?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

export function safeLocalSet(key: string, value: string): boolean {
  try {
    probeStorage("local")?.setItem(key, value);
    return localAvailable !== false;
  } catch {
    return false;
  }
}
