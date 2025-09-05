type FooterProps = {
  userName: string;
};

export function Footer({ userName }: FooterProps) {
  return (
    <footer className="border-t border-gray-200 pt-12">
    <div className="container max-w-3xl mx-auto px-6 pt-2.5 text-center text-gray-500 text-sm border-t border-t-blue-100">
      <p>© {new Date().getFullYear()} {userName}  • Generated with <a href="http://" target="_blank" rel="noopener noreferrer" className="font-medium">GitFolio</a></p>
      {/* <p>© {new Date().getFullYear()} {user.name || user.login} • Generated with GitFolio</p> */}
    </div>
  </footer>
  )
}
