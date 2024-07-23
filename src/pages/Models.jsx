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

const Models = () => {
  // This would be fetched from MLFlow in a real application
  const [models] = useState([
    { id: 1, name: "Model A", createdDate: "2023-01-01", lastModifiedDate: "2023-01-15" },
    { id: 2, name: "Model B", createdDate: "2023-02-01", lastModifiedDate: "2023-02-10" },
    { id: 3, name: "Model C", createdDate: "2023-03-01", lastModifiedDate: "2023-03-20" },
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Models</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Model Name</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Last Modified Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.id}>
              <TableCell>{model.name}</TableCell>
              <TableCell>{model.createdDate}</TableCell>
              <TableCell>{model.lastModifiedDate}</TableCell>
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

export default Models;