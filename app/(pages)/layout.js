import Header from "../components/Header";

export const metadata = {
  title: "Create Next App",
  description: "This is a page with header",
};

export default function RootLayout({ children }) {
  return (
    <div lang="en">
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
}
