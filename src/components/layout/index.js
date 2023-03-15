import Navbar from "components/layout/Navbar";
import { useAuth } from "hooks/auth";
import { LOGIN } from "lib/routes";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  
  useEffect(() => {
    if (pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname,user]);
  if (isLoading) return "Loading...";
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  );
}
