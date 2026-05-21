const Footer = () => {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Malik Stewart.</p>
        <p>Systems thinking, operational leverage, and clear communication.</p>
      </div>
    </footer>
  );
};

export default Footer;
