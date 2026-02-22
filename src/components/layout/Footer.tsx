import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative py-20 border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="text-2xl font-black text-white relative z-10">
                  D
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"></div>
              </div>
              <div>
                <span className="text-lg font-bold font-display text-foreground">
                  DOMAINPUT
                </span>
                <p className="text-[9px] text-muted-foreground tracking-wider">
                  {t("footer.tagline")}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {[
            {
              title: t("footer.products"),
              links: [
                { label: t("footer.domains"), href: "#" },
                { label: t("footer.aiEngine"), href: "#" },
                { label: t("footer.hosting"), href: "#" },
                { label: t("footer.ssl"), href: "#" },
              ],
            },
            {
              title: t("footer.company"),
              links: [
                { label: t("footer.about"), href: "#" },
                { label: t("footer.careers"), href: "#" },
                { label: t("footer.press"), href: "#" },
                { label: t("footer.partners"), href: "#" },
              ],
            },
            {
              title: t("footer.support"),
              links: [
                { label: t("footer.docs"), href: "#" },
                { label: t("footer.api"), href: "#" },
                { label: t("footer.status"), href: "#" },
                { label: t("footer.contact"), href: "/contact", isRoute: true },
              ],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold mb-6 text-foreground tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground font-display tracking-wide">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-8">
            {[t("footer.privacy"), t("footer.terms"), t("footer.cookies")].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
