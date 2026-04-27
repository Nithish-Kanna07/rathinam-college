import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const AdmissionsPage = lazy(() => import("./pages/Admissions"));
const CoursesPage = lazy(() => import("./pages/Courses"));
const CourseDetailPage = lazy(() => import("./pages/CourseDetail"));
const PlacementsPage = lazy(() => import("./pages/Placements"));
const FacilitiesPage = lazy(() => import("./pages/Facilities"));
const InternationalPage = lazy(() => import("./pages/International"));
const ContactPage = lazy(() => import("./pages/Contact"));

function PageFallback() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground text-sm">Loading…</p>
      </div>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <AboutPage />,
});
const admissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admissions",
  component: () => <AdmissionsPage />,
});
const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  component: () => <CoursesPage />,
});
const courseDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/$courseId",
  component: () => <CourseDetailPage />,
});
const placementsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/placements",
  component: () => <PlacementsPage />,
});
const facilitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/facilities",
  component: () => <FacilitiesPage />,
});
const internationalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/international",
  component: () => <InternationalPage />,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => <ContactPage />,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  admissionsRoute,
  coursesRoute,
  courseDetailRoute,
  placementsRoute,
  facilitiesRoute,
  internationalRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
