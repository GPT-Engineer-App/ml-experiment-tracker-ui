import { Home, Database, Beaker, BarChart2, FileText, Activity } from "lucide-react";
import Index from "./pages/Index.jsx";
import Models from "./pages/Models.jsx";
import Datasets from "./pages/Datasets.jsx";
import Experiments from "./pages/Experiments.jsx";
import Results from "./pages/Results.jsx";
import MLFlowIntegration from "./pages/MLFlowIntegration.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Models",
    to: "/models",
    icon: <Database className="h-4 w-4" />,
    page: <Models />,
  },
  {
    title: "Datasets",
    to: "/datasets",
    icon: <FileText className="h-4 w-4" />,
    page: <Datasets />,
  },
  {
    title: "Experiments",
    to: "/experiments",
    icon: <Beaker className="h-4 w-4" />,
    page: <Experiments />,
  },
  {
    title: "Results",
    to: "/results",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <Results />,
  },
  {
    title: "MLFlow Integration",
    to: "/mlflow",
    icon: <Activity className="h-4 w-4" />,
    page: <MLFlowIntegration />,
  },
];