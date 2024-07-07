// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider, createRoutesFromChildren, Route } from "react-router-dom";
import Layout from "./component/Layout.jsx";
import HostLayout from "./pages/Host/HostLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.jsx";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail.jsx";
import Dashboard, { loader as hostVanDashboardLoader } from "./pages/Host/Dashboard.jsx";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans.jsx";
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login.jsx";
import NotFound from "./component/NotFound.jsx";
import Error from "./component/Error.jsx";
import Loading from "./component/Loading.jsx";
import { requireAuth } from "./utils/utils.js";

import "./server";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} fallback={<Loading />} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} fallback={<Loading />} />
      <Route
        path="host"
        element={<HostLayout />}
        errorElement={<Error />}
        loader={async ({ request }) => await requireAuth(request)}
      >
        <Route index element={<Dashboard />} loader={hostVanDashboardLoader} />
        <Route path="income" element={<Income />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path="reviews" element={<Reviews />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path="vans" element={<HostVans />} errorElement={<Error />} loader={hostVansLoader} />
        <Route path="vans/:id" element={<HostVanDetail />} errorElement={<Error />} loader={hostVanDetailLoader}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// The below is the normal route method
// Here to use the data layer api need to change this to new mehtod like above

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="vans" element={<Vans />} />
//           <Route path="vans/:id" element={<VanDetail />} />
//           <Route path="host" element={<HostLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="income" element={<Income />} />
//             <Route path="reviews" element={<Reviews />} />
//             <Route path="vans" element={<HostVans />} />
//             <Route path="vans/:id" element={<HostVanDetail />}>
//               <Route index element={<HostVanInfo />} />
//               <Route path="pricing" element={<HostVanPricing />} />
//               <Route path="photos" element={<HostVanPhotos />} />
//             </Route>
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
