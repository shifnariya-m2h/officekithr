import { Link } from "react-router-dom";
import { AUTHORITY_CLUSTERS } from "@/data/authority-clusters";
import { FileCheck, Bot, Users, Briefcase, Globe, Building2 } from "lucide-react";
import type { ReactNode } from "react";

const CLUSTER_ICONS: Record<string, ReactNode> = {
  "payroll-compliance": <FileCheck className="h-5 w-5" />,
  "hr-automation": <Bot className="h-5 w-5" />,
  "employee-experience": <Users className="h-5 w-5" />,
  "recruitment-talent": <Briefcase className="h-5 w-5" />,
  "gcc-hr": <Globe className="h-5 w-5" />,
  "india-hr": <Building2 className="h-5 w-5" />,
};

export function TopicalClusterNav() {
  return (
    <section className="py-16 bg-muted/20" aria-labelledby="clusters-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2
          id="clusters-heading"
          className="text-2xl md:text-3xl font-semibold text-foreground mb-3 text-center"
        >
          Explore by topic
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Browse our content organised by HR domain — from payroll compliance to
          AI automation and employee experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(AUTHORITY_CLUSTERS).map((cluster) => (
            <article
              key={cluster.slug}
              className="rounded-xl border border-border bg-card p-6"
              aria-labelledby={`cluster-${cluster.slug}-title`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary" aria-hidden>
                  {CLUSTER_ICONS[cluster.slug] ?? <FileCheck className="h-5 w-5" />}
                </span>
                <h3
                  id={`cluster-${cluster.slug}-title`}
                  className="text-lg font-semibold text-foreground"
                >
                  {cluster.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cluster.description}
              </p>
              <ul className="space-y-2 list-none p-0 m-0">
                {cluster.pillarPages.slice(0, 5).map((page) => (
                  <li key={page.path}>
                    <Link
                      to={page.path}
                      className="text-sm text-primary hover:text-primary/80 transition-colors hover:underline"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
                {cluster.pillarPages.length > 5 && (
                  <li className="text-sm text-muted-foreground">
                    +{cluster.pillarPages.length - 5} more articles
                  </li>
                )}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
