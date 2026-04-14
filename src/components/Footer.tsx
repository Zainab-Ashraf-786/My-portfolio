import { socialLinks } from '@/lib/data';
import * as LucideIcons from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border-color/50 bg-bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright */}
          <p className="text-text-muted text-sm font-medium">
            &copy; {currentYear} Zainab Ashraf. All rights reserved.
          </p>

          {/* Center: Tagline */}
          <p className="text-text-muted text-sm font-medium">
            Built with Next.js &amp; Tailwind CSS
          </p>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;
              if (!IconComponent) return null;

              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-bg-elevated border border-border-color rounded-lg text-text-muted hover:text-accent-primary hover:border-accent-primary/50 transition-all"
                  aria-label={link.label}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
