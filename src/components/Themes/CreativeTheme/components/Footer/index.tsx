export function Footer() {
  return (
    <footer className="border-gray-200 pt-12">
    <div className="container max-w-3xl mx-auto px-6 pt-2.5 text-center text-gray-500 text-sm border-t border-t-blue-100">
      <p>© {new Date().getFullYear()} Luciana Kyoko  • Generated with <a href="/" target="_blank" rel="noopener noreferrer" className="font-medium">GitFolio</a></p>
      {/* <p>© {new Date().getFullYear()} {user.name || user.login} • Generated with GitFolio</p> */}
    </div>
  </footer>
  )
}