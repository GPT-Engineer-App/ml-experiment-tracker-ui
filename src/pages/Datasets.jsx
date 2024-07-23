import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Edit, Trash } from "lucide-react";

const Datasets = () => {
  // This would be fetched from MLFlow in a real application
  const [datasets] = useState([
    { id: 1, name: "Dataset A", createdDate: "2023-01-01", lastModifiedDate: "2023-01-15" },
    { id: 2, name: "Dataset B", createdDate: "2023-02-01", lastModifiedDate: "2023-02-10" },
    { id: 3, name: "Dataset C", createdDate: "2023-03-01", lastModifiedDate: "2023-03-20" },
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Datasets</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Dataset Name</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Last Modified Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datasets.map((dataset) => (
            <TableRow key={dataset.id}>
              <TableCell>{dataset.name}</TableCell>
              <TableCell>{dataset.createdDate}</TableCell>
              <TableCell>{dataset.lastModifiedDate}</TableCell>
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

export default Datasets;