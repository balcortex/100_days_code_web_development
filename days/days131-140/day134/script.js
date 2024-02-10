const root = document.documentElement; // the :root element
document.querySelector('button').addEventListener('click', toggleTheme);

function toggleTheme(e) {
  const theme = root.className;
  root.className = theme === 'dark' ? 'light' : 'dark';
}