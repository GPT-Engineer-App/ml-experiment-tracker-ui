import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Eye, Edit, Trash } from "lucide-react";

const Experiments = () => {
  // This would be fetched from MLFlow in a real application
  const [experiments] = useState([
    { id: 1, name: "Experiment A", modelName: "Model A", datasetName: "Dataset A", createdDate: "2023-01-01", lastModifiedDate: "2023-01-15" },
    { id: 2, name: "Experiment B", modelName: "Model B", datasetName: "Dataset B", createdDate: "2023-02-01", lastModifiedDate: "2023-02-10" },
    { id: 3, name: "Experiment C", modelName: "Model C", datasetName: "Dataset C", createdDate: "2023-03-01", lastModifiedDate: "2023-03-20" },
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Experiments</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Experiment Name</TableHead>
            <TableHead>Model Name</TableHead>
            <TableHead>Dataset Name</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Last Modified Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {experiments.map((experiment) => (
            <TableRow key={experiment.id}>
              <TableCell>{experiment.name}</TableCell>
              <TableCell>{experiment.modelName}</TableCell>
              <TableCell>{experiment.datasetName}</TableCell>
              <TableCell>{experiment.createdDate}</TableCell>
              <TableCell>{experiment.lastModifiedDate}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Experiments;