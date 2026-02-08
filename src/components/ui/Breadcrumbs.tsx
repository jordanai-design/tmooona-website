import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-brand-gray">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <span className="text-brand-border">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand-green transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-dark">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
