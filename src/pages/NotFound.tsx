import { useLocation, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main
        id="main-content"
        className="flex-1 flex items-center justify-center px-4 py-24"
      >
        <div className="text-center max-w-lg">
          <p className="text-sm font-medium text-muted-foreground mb-2">404</p>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-muted-foreground mb-6">
            No page exists at{" "}
            <code className="text-sm bg-muted px-2 py-1 rounded">
              {location.pathname}
            </code>
            . It may have moved or the link is incorrect.
          </p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
