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

const data: Payment[] = [
  {
    id: "m5gr84i9",
    name: "ATIF",
    userName: "atif@gmail.com",
    city: "New York",
    phone: 123456789,
    jobTitle: "software",
    department: "Urology",
    facility: " Care Medical",
    blockSignIn: "No",
    amount: 316,
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    name: "ATIF",
    userName: "atif@gmail.com",
    city: "New York",
    phone: 123456789,
    jobTitle: "software",
    department: "Urology",
    facility: " Care Medical",
    blockSignIn: "No",
    amount: 242,
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    name: "Zahoor",
    userName: "atif@gmail.com",
    city: "New York",
    phone: 123456789,
    jobTitle: "software",
    department: "Urology",
    facility: " Care Medical",
    blockSignIn: "No",
    amount: 837,
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    name: "ASIM",
    userName: "atif@gmail.com",
    city: "New York",
    phone: 123456789,
    jobTitle: "software",
    department: "Urology",
    facility: " Care Medical",
    blockSignIn: "No",
    amount: 874,
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    name: "JAWAD",
    userName: "atif@gmail.com",
    city: "New York",
    phone: 123456789,
    jobTitle: "software",
    department: "Urology",
    facility: " Care Medical",
    blockSignIn: "No",
    amount: 721,
    email: "carmella@hotmail.com",
  },
  {
    id: "bhqecj4p",
    name: "JAWAD",
    userName: "atif@gmail.com",
    city: "New York",
    phone: 123456789,
    jobTitle: "software",
    department: "Urology",
    facility: " Care Medical",
    blockSignIn: "No",
    amount: 721,
    email: "carmella@hotmail.com",
  },
];

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
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className=" flex items-center justify-center">
              <MoreVertical className="h-4 w-4" />
            </div>
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
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "15px",
                height: "47px",
              }}
            >
              <TiEye />
              View User info
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
              Remove User
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

export function DataTableDemoUpdated() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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
      <div className="flex items-center py-4 gap-5 justify-between">
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

          <DropdownMenuContent align="end">
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
          </DropdownMenuContent>
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
