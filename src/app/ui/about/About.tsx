import PagesList from "./pages-list";
import SocialList from "./social-list";

export default function About() {
  return (
    <footer className="mt-32 mb-6 flex justify-evenly">
      <PagesList />
      <SocialList />
    </footer>
  );
}
