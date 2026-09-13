import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: window.location.pathname || '/',
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Update browser URL
    window.history.pushState({}, '', to);
    setCurrentPath(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  id?: string;
  key?: React.Key;
  onMouseEnter?: (e?: any) => void;
  onMouseLeave?: (e?: any) => void;
  [key: string]: any;
}

export function Link({ href, children, className = '', activeClassName = '', ...rest }: LinkProps) {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If opening in new tab or external link, allow default behavior
    if (e.metaKey || e.ctrlKey || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }
    e.preventDefault();
    navigate(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
      {...rest}
    >
      {children}
    </a>
  );
}
