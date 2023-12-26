import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTableDemo } from "./TableComponent";
import Register from "./Form";
import { DataTableDemoRemove } from "./RemoveUser";
import { PaginationDemo } from "./Pagination";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full  ">
      <TabsList className="grid w-full grid-cols-2 flex space-between">
        <TabsTrigger value="user">Users</TabsTrigger>
        <TabsTrigger value="removed">Recently Removed</TabsTrigger>
        <TabsTrigger value="add">Recently Added</TabsTrigger>
        <TabsTrigger value="updated">Recently updated</TabsTrigger>
      </TabsList>
      <TabsContent value="user">
        <DataTableDemo />
        <PaginationDemo />
      </TabsContent>
      <TabsContent value="removed">
        <DataTableDemoRemove />
      </TabsContent>
      <TabsContent value="add">
        <DataTableDemo />
      </TabsContent>
      <TabsContent value="updated">
        <DataTableDemo />
      </TabsContent>
    </Tabs>
  );
}
