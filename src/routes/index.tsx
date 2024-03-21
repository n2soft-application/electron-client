import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Layout from "../components/layout/Layout";
import Loading from "../components/loading/Loading";
import BankingPage from "../pages/example/dashboard/banking";

// Pages
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const CommonCodePage = lazy(() => import("../pages/preferences/code/common/CommonCodePage"));

// Error pages
const Error404 = lazy(() => import("../pages/error/Error404"));

// Example Pages
const IconsPage = lazy(() => import("../pages/example/icon/IconsPage"));
const ChatPage = lazy(() => import("../pages/example/chat/ChatPage"));
const ChangeLog = lazy(() => import("../pages/example/changelog/ChangeLog"));
const Login = lazy(() => import("../pages/example/login/Login"));
const BasicWidget = lazy(() => import("../pages/example/widget/BasicWidget"));
const StatisticWidget = lazy(() => import("../pages/example/widget/StatisticWidget"));
const AppexChartPage = lazy(() => import("../pages/example/chart/appex-chart/AppexChartPage"));
const BasicTablePage = lazy(() => import("../pages/example/table/BasicTablePage"));
const MapPage = lazy(() => import("../pages/example/map/MapPage"));
const TodoPage = lazy(() => import("../pages/example/todo/TodoPage"));

// Components
const Typography = lazy(() => import("../pages/example/components/typography/Typography"));
const Colors = lazy(() => import("../pages/example/components/colors/Colors"));
const ButtonPage = lazy(() => import("../pages/example/components/button/ButtonPage"));
const CardPage = lazy(() => import("../pages/example/components/card/CardPage"));
const ImagePage = lazy(() => import("../pages/example/components/image/ImagePage"));
const BadgePage = lazy(() => import("../pages/example/components/badge/BadgePage"));
const AlertPage = lazy(() => import("../pages/example/components/alert/AlertPage"));
const ModalPage = lazy(() => import("../pages/example/components/modal/ModalPage"));
const ProgressPage = lazy(() => import("../pages/example/components/progress/ProgressPage"));
const PlaceholderPage = lazy(() => import("../pages/example/components/placeholder/PlaceholderPage"));
const TooltipPage = lazy(() => import("../pages/example/components/tooltip/TooltipPage"));
const VideoPage = lazy(() => import("../pages/example/components/video/VideoPage"));
const AccordionPage = lazy(() => import("../pages/example/components/accordion/AccordionPage"));
const DropdownPage = lazy(() => import("../pages/example/components/dropdown/DropdownPage"));
const PaginationPage = lazy(() => import("../pages/example/components/pagination/PaginationPage"));
const CarouselPage = lazy(() => import("../pages/example/components/carousel/CarouselPage"));
const CheckboxPage = lazy(() => import("../pages/example/form/CheckboxPage"));
const TextareaPage = lazy(() => import("../pages/example/form/TextareaPage"));
const RadioButtonPage = lazy(() => import("../pages/example/form/RadioButtonPage"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route path="/*" element={<Layout />}>
        <Route path="home/dashboard" element={<Dashboard />} />
        <Route path="code/common" element={<CommonCodePage />} />

        {/* Example */}
        <Route path="banking" element={<BankingPage />} />
        <Route path="icons" element={<IconsPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="appex-chart" element={<AppexChartPage />} />
        <Route path="changelog" element={<ChangeLog />} />
        <Route path="table-basic" element={<BasicTablePage />} />
        <Route path="basic" element={<BasicWidget />} />
        <Route path="statistic" element={<StatisticWidget />} />
        <Route path="map" element={<MapPage />} />
        <Route path="todo" element={<TodoPage />} />

        {/* Components */}
        <Route path="typography" element={<Typography />} />
        <Route path="colors" element={<Colors />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="card" element={<CardPage />} />
        <Route path="image" element={<ImagePage />} />
        <Route path="badges" element={<BadgePage />} />
        <Route path="alert" element={<AlertPage />} />
        <Route path="modal" element={<ModalPage />} />
        <Route path="progress-bar" element={<ProgressPage />} />
        <Route path="placeholder" element={<PlaceholderPage />} />
        <Route path="tooltip-popover" element={<TooltipPage />} />
        <Route path="video" element={<VideoPage />} />
        <Route path="tab-accordion" element={<AccordionPage />} />
        <Route path="dropdown" element={<DropdownPage />} />
        <Route path="paginations" element={<PaginationPage />} />
        <Route path="carousel" element={<CarouselPage />} />
        <Route path="checkbox" element={<CheckboxPage />} />
        <Route path="textarea" element={<TextareaPage />} />
        <Route path="radio-button" element={<RadioButtonPage />} />

        <Route path="*" element={<Navigate replace={true} to="/404" />} />
      </Route>
      <Route
        path="/404"
        element={
          <Suspense fallback={<Loading />}>
            <Error404 />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
