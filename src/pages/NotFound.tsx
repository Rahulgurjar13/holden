import SiteLayout from "@/components/site/SiteLayout";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404: route not found", location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="min-h-[80vh] grid place-items-center bg-gradient-section pt-32 pb-20">
        <div className="text-center container">
          <p className="font-display text-[8rem] lg:text-[12rem] font-extrabold text-navy/10 leading-none">404</p>
          <h1 className="-mt-12 font-display text-3xl lg:text-4xl font-extrabold text-navy">Page not found</h1>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            The page you're looking for has moved or doesn't exist.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 bg-navy hover:bg-electric text-white font-semibold px-6 py-3.5 rounded-md transition-all duration-300 btn-glow"
          >
            <Home className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
