import { execFileSync } from "node:child_process";
import path from "node:path";

/**
 * Echte Änderungsdaten für die Sitemap.
 *
 * Die Seiten dieser Website entstehen erst beim Build, `out/` steht in
 * `.gitignore` — es gibt also keine Dateihistorie je Seite. Stattdessen zählt
 * das Commit-Datum der Quelle, die den Inhalt einer Route bestimmt.
 *
 * ACHTUNG: Der Workflow muss `fetch-depth: 0` setzen. Bei einem flachen Clone
 * kennt git nur den letzten Commit und alle Seiten bekämen dasselbe Datum —
 * genau der Zustand, den diese Datei beseitigen soll. Der Build warnt dann.
 */

const REPO = path.join(process.cwd());

function git(args: string[]): string {
  return execFileSync("git", ["-C", REPO, ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
}

let cache: Record<string, string> | null = null;
let neuester = "";

function daten(): Record<string, string> {
  if (cache) return cache;
  const map: Record<string, string> = {};
  try {
    if (git(["rev-parse", "--is-shallow-repository"]).trim() === "true") {
      console.warn(
        "\n  Sitemap-WARNUNG: flacher Clone — alle Seiten bekommen dasselbe" +
          " lastmod.\n  Abhilfe: 'fetch-depth: 0' im checkout-Schritt des Workflows.\n",
      );
    }
    // Ein einziger git-Aufruf: Commit-Datum, dann die Dateien dieses Commits.
    const out = git(["log", "--name-only", "--format=%cs", "--", "app", "public"]);
    let datum = "";
    for (const zeile of out.split("\n")) {
      const z = zeile.trim();
      if (!z) continue;
      if (/^\d{4}-\d{2}-\d{2}$/.test(z)) {
        datum = z;
        if (!neuester) neuester = z;
      } else if (datum && !(z in map)) {
        map[z] = datum; // erster Treffer = jüngster Commit
      }
    }
  } catch {
    console.warn("  Sitemap: git nicht verfügbar — lastmod fällt auf heute zurück.");
  }
  cache = map;
  return map;
}

/** Jüngstes Commit-Datum der angegebenen Quelldateien. */
export function lastmod(...dateien: string[]): Date {
  const map = daten();
  const treffer = dateien.map((d) => map[d]).filter(Boolean).sort();
  const tag = treffer.length ? treffer[treffer.length - 1] : neuester;
  return tag ? new Date(tag + "T00:00:00Z") : new Date();
}
