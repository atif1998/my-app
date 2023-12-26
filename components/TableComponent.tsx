"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TiEye } from "react-icons/ti";
import { Mail } from "lucide-react";

import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  MoreVertical,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "./ui/switch";

import { Sort } from "@/app/assests/svgs/Sort";
import { DialogDemo } from "./Dialog";
import DialogDemoRemove from "./DialogRemove";

const userTemplate = {
  id: "m5gr84i9",
  name: "ATIF",
  userName: "atif@gmail.com",
  Initialpasswprd: "123456789",
  blockSignIn: "No",
  Firstname: "john",
  Lastname: "doe",
  jobTitle: "software",
  department: "Urology",
  UsageLocation: "newyork",
  Country: "United States",
  office: "officename",
  city: "New York",
  Zipcode: "12345",
  phone: 123456789,
  officePhone: "123456789",
  facility: " Care Medical",
  Signin: "enabled",
};

const generateUsers = (count: number) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    // Use spread operator to create a shallow copy of the template
    const newUser = { ...userTemplate };

    // Modify properties if needed

    // Add the new user to the array
    users.push(newUser);
  }

  return users;
};

// Example: Generate 100 users
const numberOfUsers = 100;
const users = generateUsers(numberOfUsers);

console.log(users);
const data: Payment[] = users.map((user) => ({
  id: user.id,
  name: user.name,
  userName: user.userName,
  city: user.city,
  phone: user.phone,
  jobTitle: user.jobTitle,
  department: user.department,
  amount: 0, // You may need to adjust this property based on your data
  facility: user.facility,
  blockSignIn: user.blockSignIn,
  email: user.userName, // You may need to adjust this property based on your data
}));

export type Payment = {
  id: string;
  name: string;
  userName: String;
  city: string;
  phone: number;
  jobTitle: string;
  department: string;
  amount: number;
  facility: string;
  blockSignIn: string;
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    id: "name",
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    id: "userName",
    accessorKey: "userName",
    header: "Username",
    cell: ({ row }) => <div>{row.getValue("userName")}</div>,
  },

  {
    id: "jobTitle",
    accessorKey: "jobTitle",
    header: "Job Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("jobTitle")}</div>
    ),
  },
  {
    id: "department",
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("department")}</div>
    ),
  },
  {
    id: "city",
    accessorKey: "city",
    header: "City",
    cell: ({ row }) => <div className="capitalize">{row.getValue("city")}</div>,
  },
  {
    id: "phone",
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    ),
  },
  {
    id: "facility",
    accessorKey: "facility",
    header: "Facility",
    cell: ({ row }) => <span>{row.getValue("facility")}</span>,
  },
  {
    id: "blockSignIn",
    accessorKey: "blockSignIn",
    header: "Block signin",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("blockSignIn")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 actions-cell">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            style={{
              borderRadius: "20px 0px 20px 20px",
              width: "218px",
              height: "275px",
            }}
          >
            <DropdownMenuLabel
              onClick={() => handleViewUserInfo(row)}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "15px",
                height: "47px",
                cursor: "pointer",
              }}
            >
              <TiEye />
              <DialogDemo />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "15px",
                height: "47px",
              }}
            >
              <AiFillEdit />
              Update User info
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "15px",
                height: "47px",
              }}
            >
              <MdDelete />
              <DialogDemoRemove />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                height: "47px",
              }}
            >
              {" "}
              <AiFillEdit />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Disable Signin <Switch />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "15px",
                height: "47px",
                marginLeft: "24px",
              }}
            >
              Cancel
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
const handleViewUserInfo = (row: any) => {
  // Replace this with your actual logic to view user info
  console.log("Viewing user info:", row.original);
};

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [showFilters, setShowFilters] = React.useState(false);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const handleClick = () => {
    setShowFilters((prev) => !prev);
  };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full p-4 ">
      <div className="flex items-center py-4 gap-5">
        <DropdownMenu>
          <div className="flex items-center gap-2 h-15">
            <Sort />
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "12px",
                color: "#19151C",
                lineHeight: "15px",
              }}
            >
              Sort by name
            </p>
            <IoIosArrowDown />
          </div>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto"
              style={{ border: "1px solid #1D374E" }}
              onClick={handleClick}
            >
              Apply Filter <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          {/* <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent> */}
        </DropdownMenu>
        <Input
          placeholder="Search by name or title"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      {showFilters && (
        <div className="p-1  w-full  h-[200px] flex flex-col gap-4 ">
          <div className=" flex  gap-4">
            <div className="relative flex flex-row items-center justify-center ">
              <div className="flex flex-col ">
                <label>Department/Speciality</label>
                <Input
                  className="rounded-8 h-[45px] w-[200px] dark:bg-white dark:text-black"
                  placeholder="select"
                />
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer">
                <ChevronDown size={15} className="dark:text-black" />
              </div>
            </div>
            <div>
              <div className="relative flex items-center justify-center ">
                <div className="flex flex-col">
                  <label>Title</label>
                  <Input
                    className="rounded-8 h-[45px] w-[200px] dark:bg-white dark:text-black"
                    placeholder="select"
                  />
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer">
                  <ChevronDown size={15} className="dark:text-black" />
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex flex-row items-center justify-center ">
                <div className="flex flex-col ">
                  <label>Language</label>
                  <Input
                    className="rounded-8 h-[45px] w-[200px] dark:bg-white dark:text-black"
                    placeholder="select"
                  />
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer">
                  <ChevronDown size={15} className="dark:text-black" />
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex flex-row items-center justify-center ">
                <div className="flex flex-col ">
                  <label>Distance</label>
                  <Input
                    className="rounded-8 h-[45px] w-[200px] dark:bg-white dark:text-black"
                    placeholder="select"
                  />
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer">
                  <ChevronDown size={15} className="dark:text-black" />
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex flex-row items-center justify-center ">
                <div className="flex flex-col items-center ">
                  <label>Additional filter</label>
                  <Input
                    className="rounded-8 h-[45px] w-[200px] dark:bg-white dark:text-black"
                    placeholder="select"
                  />
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer">
                  <ChevronDown size={15} className="dark:text-black" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-4 ">
            <div>
              <div className="relative flex items-center justify-center ">
                <Input
                  className="rounded-8 h-[45px] w-[200px] dark:bg-white dark:text-black"
                  placeholder="select"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer">
                  <ChevronDown size={15} className="dark:text-black" />
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex items-center justify-center ">
                <Input
                  className="rounded-8 h-[45px] w-[200px] dark:bg-white dark:text-black"
                  placeholder="select"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer">
                  <ChevronDown size={15} className="dark:text-black" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2  items-center">
              <Checkbox className="rounded-full" />
              <p>Only Show favourites </p>
              <Checkbox className=" rounded-full" />
              <p>Register Users</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleClick}
                style={{
                  border: "1px solid #1D374E",
                  background: "white",
                  color: "#1D374E",
                  width: "120px",
                }}
              >
                Cancel
              </Button>
              <Button
                style={{
                  border: "1px solid #1D374E",
                  background: "#1D374E",
                  width: "120px",
                }}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
