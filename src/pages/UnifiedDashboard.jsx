import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/ui/date-picker-with-range";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UnifiedDashboard = () => {
  const [experiments, setExperiments] = useState([]);
  const [models, setModels] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [selectedExperiment, setSelectedExperiment] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDataset, setSelectedDataset] = useState("");
  const [selectedMetric, setSelectedMetric] = useState("");
  const [dateRange, setDateRange] = useState({ from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), to: new Date() });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchExperiments();
    fetchModels();
    fetchDatasets();
    fetchMetrics();
  }, []);

  useEffect(() => {
    if (selectedExperiment && selectedModel && selectedDataset && selectedMetric && dateRange.from && dateRange.to) {
      fetchChartData();
    }
  }, [selectedExperiment, selectedModel, selectedDataset, selectedMetric, dateRange]);

  const fetchExperiments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/2.0/mlflow/experiments/list');
      const data = await response.json();
      setExperiments(data.experiments);
    } catch (error) {
      console.error('Error fetching experiments:', error);
    }
  };

  const fetchModels = async () => {
    // This is a placeholder. You'll need to implement the actual API call to fetch models.
    setModels([
      { id: 1, name: "Model A" },
      { id: 2, name: "Model B" },
      { id: 3, name: "Model C" },
    ]);
  };

  const fetchDatasets = async () => {
    // This is a placeholder. You'll need to implement the actual API call to fetch datasets.
    setDatasets([
      { id: 1, name: "Dataset X" },
      { id: 2, name: "Dataset Y" },
      { id: 3, name: "Dataset Z" },
    ]);
  };

  const fetchMetrics = async () => {
    // This is a placeholder. You'll need to implement the actual API call to fetch available metrics.
    setMetrics([
      { id: 1, name: "Accuracy" },
      { id: 2, name: "F1 Score" },
      { id: 3, name: "Precision" },
      { id: 4, name: "Recall" },
    ]);
  };

  const fetchChartData = async () => {
    // This is a placeholder. You'll need to implement the actual API call to fetch chart data based on selected parameters.
    const mockData = [
      { date: "2023-01-01", value: 0.75 },
      { date: "2023-02-01", value: 0.78 },
      { date: "2023-03-01", value: 0.82 },
      { date: "2023-04-01", value: 0.85 },
      { date: "2023-05-01", value: 0.88 },
    ];
    setChartData(mockData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Unified Dashboard</h2>
      <Card>
        <CardHeader>
          <CardTitle>Experiment Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            <Select onValueChange={setSelectedExperiment}>
              <SelectTrigger>
                <SelectValue placeholder="Select Experiment" />
              </SelectTrigger>
              <SelectContent>
                {experiments.map((experiment) => (
                  <SelectItem key={experiment.experiment_id} value={experiment.experiment_id}>
                    {experiment.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedModel}>
              <SelectTrigger>
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent>
                {models.map((model) => (
                  <SelectItem key={model.id} value={model.id.toString()}>
                    {model.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedDataset}>
              <SelectTrigger>
                <SelectValue placeholder="Select Dataset" />
              </SelectTrigger>
              <SelectContent>
                {datasets.map((dataset) => (
                  <SelectItem key={dataset.id} value={dataset.id.toString()}>
                    {dataset.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedMetric}>
              <SelectTrigger>
                <SelectValue placeholder="Select Metric" />
              </SelectTrigger>
              <SelectContent>
                {metrics.map((metric) => (
                  <SelectItem key={metric.id} value={metric.id.toString()}>
                    {metric.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <DatePickerWithRange setDateRange={setDateRange} />
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnifiedDashboard;