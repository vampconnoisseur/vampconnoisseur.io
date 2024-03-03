import SocialList from "./social-list";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-evenly mt-32 pt-14 pb-6 bg-black text-white max-w-screen-xl mx-auto">
      <SocialList />
      <div className="mt-12 text-gray-500 text-center">
        &copy; 2024 vampconnoisser. All Rights Reserved.
      </div>
    </footer>
  );
}
