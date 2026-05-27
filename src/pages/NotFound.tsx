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
            . Try one of these regional pages:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm">
                India (home)
              </Button>
            </Link>
            <Link to="/ae">
              <Button variant="outline" size="sm">
                UAE
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="sm">
                All regions
              </Button>
            </Link>
            <Link to="/hrms-software-india">
              <Button variant="outline" size="sm">
                HRMS India
              </Button>
            </Link>
            <Link to="/hr-software-uae">
              <Button variant="outline" size="sm">
                HR UAE
              </Button>
            </Link>
          </div>
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
