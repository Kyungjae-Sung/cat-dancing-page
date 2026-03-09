export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="site-header">
        <h1 className="title">🐱 댄싱 캣</h1>
        <p className="subtitle">신나는 고양이의 댄스 타임!</p>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="site-footer">
        <p>Made with ❤️ and React</p>
      </footer>
    </div>
  );
}
