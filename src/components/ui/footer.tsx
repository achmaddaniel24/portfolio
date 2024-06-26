export default function Footer() {
  return (
    <footer className="pb-4 px-4 text-center bg-sky-700 text-white select-none">
      <small className="block text-xs">
        &copy; {new Date().getFullYear()} Achmad Daniel Syahputra. All rights
        reserved.
      </small>
      <p className="text-xs"></p>
    </footer>
  );
}
