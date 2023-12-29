import { z } from "zod";

export const resetValidationSchema = z.object({
  name: z.string().min(4, {
    message: "name must be at least 4 characters",
  }),
  firstName: z.string().min(4, {
    message: "first name must be at least 4 characters",
  }),
  lastName: z.string().min(4, {
    message: "last name must be at least 4 characters",
  }),
  userName: z.string().min(4, {
    message: "user name must be at least 4 characters",
  }),
  email: z.string().email({
    message: "enter email address",
  }),
  gender: z.string(),
  jobTitle: z.string().min(4, {
    message: "job title must be at least 4 characters",
  }),
  department: z.string().min(4, {
    message: "department must be at least 4 characters",
  }),
  office: z.string().min(4, {
    message: "office must be at least 4 characters",
  }),
  facility: z.string().min(4, {
    message: "facility must be at least 4 characters",
  }),
  language: z.string().min(4, {
    message: "language must be at least 4 characters",
  }),
  degree: z.string().min(4, {
    message: "degree must be at least 4 characters",
  }),
  address: z.string().min(4, {
    message: "address must be at least 4 characters",
  }),
  state: z.string().min(4, {
    message: "state must be at least 4 characters",
  }),
  country: z.string().min(4, {
    message: "country must be at least 4 characters",
  }),
  city: z.string().min(4, {
    message: "city must be at least 4 characters",
  }),
  postalCode: z
    .string()
    .min(4, { message: "postalcode must be at least 4 characters" }),
  officePhone: z.string().min(9, {
    message: "officephone must be at least 9 characters",
  }),
  mobilePhone: z.string().min(9, {
    message: "officephone must be at least 9 characters",
  }),
  password: z.string().min(4, {
    message: "password must be at least 4 characters",
  }),
});

export type resetValidationSchema = z.infer<typeof resetValidationSchema>;
