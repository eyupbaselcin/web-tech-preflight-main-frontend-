interface HeaderProps {
  title: string;
  text?: string;
}

function Header({ title, text }: HeaderProps) {
  return (
    <header className="brand">
      <span className="brand-mark" aria-hidden="true">K</span>
      <div>
        <p className="eyebrow">KAMPÜS YAŞAMI</p>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </header>
  );
}

export default Header;
