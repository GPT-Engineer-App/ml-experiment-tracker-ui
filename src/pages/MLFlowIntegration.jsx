import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Eye, BarChart } from "lucide-react";

const MLFlowIntegration = () => {
  const [experiments, setExperiments] = useState([]);
  const [runs, setRuns] = useState([]);

  useEffect(() => {
    // Fetch experiments and runs from MLFlow API
    fetchExperiments();
    fetchRuns();
  }, []);

  const fetchExperiments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/2.0/mlflow/experiments/list');
      const data = await response.json();
      setExperiments(data.experiments);
    } catch (error) {
      console.error('Error fetching experiments:', error);
    }
  };

  const fetchRuns = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/2.0/mlflow/runs/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          max_results: 100,
          order_by: ["start_time DESC"],
        }),
      });
      const data = await response.json();
      setRuns(data.runs);
    } catch (error) {
      console.error('Error fetching runs:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">MLFlow Integration</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Experiments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Experiment ID</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {experiments.map((experiment) => (
                <TableRow key={experiment.experiment_id}>
                  <TableCell>{experiment.name}</TableCell>
                  <TableCell>{experiment.experiment_id}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Runs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Run ID</TableHead>
                <TableHead>Experiment ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {runs.map((run) => (
                <TableRow key={run.info.run_id}>
                  <TableCell>{run.info.run_id}</TableCell>
                  <TableCell>{run.info.experiment_id}</TableCell>
                  <TableCell>{run.info.status}</TableCell>
                  <TableCell>{new Date(run.info.start_time).toLocaleString()}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <BarChart className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MLFlowIntegration;