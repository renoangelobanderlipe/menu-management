import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const menuItemSchema = z.object({
  image: z
    .any()
    .optional()
    .nullable()
    .refine(
      (file) => {
        if (file instanceof File) {
          return file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg+xml';
        }
        return true;
      },
      { message: 'Invalid file type. Please upload JPG, PNG, or SVG.' },
    ),
  itemName: z.string().min(1, 'Item name is required'),
  category: z
    .string()
    .min(1, 'At least one category is required')
    .refine(
      (val) =>
        !val ||
        val.split(',').map((categories) => categories.length <= 3, {
          message: 'Maximum of 3 categories allowed.',
        }),
    ),
  price: z.preprocess(
    (arg) => (typeof arg == 'string' ? parseFloat(arg) : arg),
    z.number({ message: "Price must be a valid number" }).min(0, 'Price must be a positive number'),
  ),
  cost: z.preprocess(
    (arg) => (typeof arg == 'string' ? parseFloat(arg) : arg),
    z.number({ message: "Cost must be a valid number" }).min(0, 'Cost must be a number'),
  ),
  amountInStock: z.preprocess(
    (arg) => (typeof arg == 'string' ? parseInt(arg) : arg),
    z.number({ message: "Amount must be a valid number" }).min(0, 'Amount in stock must be a positive number'),
  ),
  options: z
    .string()
    .optional()
    .refine((val) => !val || val.split(',').map((options) => options.trim()).length <= 4, {
      message: 'You can add up to 4 options',
    }),
});

export { loginSchema, menuItemSchema };
