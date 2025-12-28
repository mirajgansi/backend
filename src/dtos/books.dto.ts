import { z } from "zod";
import { BookSchema } from "../types/books.type";

//DTO - Data transger object
export const createBookDto = BookSchema.pick({id: true, title: true});
export type createBookDto = z.infer<typeof createBookDto>;
