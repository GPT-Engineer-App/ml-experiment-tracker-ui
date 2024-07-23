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

const Results = () => {
  // This would be fetched from MLFlow in a real application
  const [results] = useState([
    { id: 1, experimentName: "Experiment A", accuracy: 0.85, latency: 100, perplexity: 10.5, size: "5MB", createdDate: "2023-01-15" },
    { id: 2, experimentName: "Experiment B", accuracy: 0.90, latency: 120, perplexity: 9.8, size: "6MB", createdDate: "2023-02-10" },
    { id: 3, experimentName: "Experiment C", accuracy: 0.88, latency: 110, perplexity: 10.2, size: "5.5MB", createdDate: "2023-03-20" },
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Results</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Experiment Name</TableHead>
            <TableHead>Accuracy</TableHead>
            <TableHead>Latency (ms)</TableHead>
            <TableHead>Perplexity</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell>{result.experimentName}</TableCell>
              <TableCell>{result.accuracy.toFixed(2)}</TableCell>
              <TableCell>{result.latency}</TableCell>
              <TableCell>{result.perplexity.toFixed(2)}</TableCell>
              <TableCell>{result.size}</TableCell>
              <TableCell>{result.createdDate}</TableCell>
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

export default Results;