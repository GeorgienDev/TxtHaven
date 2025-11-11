import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="text-center mt-4 p-3 bg-dark text-white">
      <p>&copy; {new Date().getFullYear()} Txt Haven. All rights reserved.</p>
    </footer>
  );
}