import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});


const menuItemSchema = z.object({
  image: z
    .any()
    .refine((file) => {
      if (file instanceof File) {
        return (
          file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/svg+xml"
        );
      } else if (file) {
        return false;
      }
      return true;
    }, { message: "Invalid file type. Please upload JPG, PNG, or SVG." })
    .optional(),
  itemName: z
    .string()
    .min(1, "Item name is required"),
  category: z
    .string()
    .min(1, "At least one category is required")
    .transform((value) => value.split(",").map((cat) => cat.trim()))
    .refine((categories) => categories.length <= 3, {
      message: "Maximum of 3 categories allowed.",
    }),
  price: z.preprocess(
    (arg) => (typeof arg == "string" ? parseFloat(arg) : arg),
    z.number().min(0, "Price must be a positive number")
  ),
  cost: z.preprocess(
    (arg) => (typeof arg == "string" ? parseFloat(arg) : arg),
    z.number().min(0, "Cost must be a number")
  ),
  amountInStock: z.preprocess(
    (arg) => (typeof arg == "string" ? parseInt(arg) : arg),
    z.number().min(0, "Amount in stock must be a positive number")
  ),
  options: z
    .string()
    .optional()
    .transform((value) =>
      value ? value.split(",").map((opt) => opt.trim()) : []
    )
    .refine((options) => options.length <= 4, {
      message: "Maximum of 4 options allowed.",
    }),
});

export {loginSchema, menuItemSchema}