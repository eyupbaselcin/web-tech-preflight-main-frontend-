import type { ReactNode } from "react";

interface HeaderProps {
  title: string;
  text?: string;
  children?: ReactNode;
}

function Header({ title, text, children }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">K</span>
          <div>
            <p className="eyebrow">KAMPÜS YAŞAMI</p>
            <h1>{title}</h1>
            {text && <p>{text}</p>}
          </div>
        </div>
        {children}
      </div>
    </header>
  );
}

export default Header;
