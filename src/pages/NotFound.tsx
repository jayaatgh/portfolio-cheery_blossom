import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen gradient-hero paper-texture flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-7xl md:text-9xl font-serif text-primary/60">404</h1>
        <p className="text-xl text-muted-foreground">
          Oops! This page doesn't exist
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
