interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  path: Crumb[];
}

export function Breadcrumb({ path }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-mono text-xs text-ink-50"
    >
      <ol className="flex flex-wrap items-baseline gap-x-xs">
        {path.map((crumb, i) => {
          const isLast = i === path.length - 1;
          return (
            <li key={i} className="flex items-baseline gap-x-xs">
              {crumb.href && !isLast ? (
                <a
                  href={crumb.href}
                  className="hover:text-oxblood transition-colors duration-100"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className={isLast ? "text-ink-70" : ""}>{crumb.label}</span>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-ink-50">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
