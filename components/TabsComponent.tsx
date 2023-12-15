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
        {/* <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card> */}
      </TabsContent>
      <TabsContent value="removed">
        <DataTableDemo />
        {/* <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card> */}
      </TabsContent>
      <TabsContent value="add">
        <h1>Add</h1>
      </TabsContent>
      <TabsContent value="updated">
        <h1>Updated</h1>
      </TabsContent>
    </Tabs>
  );
}
