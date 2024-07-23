import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Database, FileText, Beaker, BarChart2 } from "lucide-react";

const DashboardCard = ({ title, value, icon }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const Index = () => {
  // These would be fetched from MLFlow in a real application
  const dashboardData = [
    { title: "Total Models", value: 10, icon: <Database className="h-4 w-4 text-muted-foreground" /> },
    { title: "Total Datasets", value: 5, icon: <FileText className="h-4 w-4 text-muted-foreground" /> },
    { title: "Total Experiments", value: 25, icon: <Beaker className="h-4 w-4 text-muted-foreground" /> },
    { title: "Total Results", value: 100, icon: <BarChart2 className="h-4 w-4 text-muted-foreground" /> },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardData.map((item, index) => (
          <DashboardCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Index;