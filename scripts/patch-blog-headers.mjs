import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const dir = join(import.meta.dirname, "..", "src", "pages", "Blogpages");
const files = [
  "WhyHrms",
  "NewPerfomenceBlog",
  "StreamliningPayroll",
  "MobileAppUpdates",
  "NavigateHybrid",
  "QualityQuatity",
  "AIPoweredFeatures",
  "HRMSSystem",
  "RealWorldDEI",
];

for (const f of files) {
  const p = join(dir, `${f}.tsx`);
  let s = readFileSync(p, "utf8");
  if (!s.includes("StaticBlogHeader")) {
    s = s.replace(
      'import BlogActions from "@/components/BlogActions";\n',
      'import { StaticBlogHeader } from "@/components/StaticBlogHeader";\n'
    );
    s = s.replace(
      /import \{ Badge \} from "@\/components\/ui\/badge";\nimport \{ Calendar, User \} from "lucide-react";\n/,
      ""
    );
    s = s.replace(/import \{ Badge \} from "@\/components\/ui\/badge";\n/, "");
  }
  s = s.replace(/<header className="mb-8">[\s\S]*?<\/header>/, "<StaticBlogHeader meta={meta} />");
  writeFileSync(p, s);
  console.log(`Updated ${f}`);
}
