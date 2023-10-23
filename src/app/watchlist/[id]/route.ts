import { WATCHLIST_ID } from "@/constants";
import { addMovieToCategory, removeMovieFromCategory } from "@/lib/api";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

type Params = {
  request: Request,
  params: {
    id: number;
  };
};

export async function POST(request: Request, { params: { id } }: Params) {
  console.log("POST", id);

  await addMovieToCategory(id, WATCHLIST_ID);
  revalidatePath(`/`);

  revalidatePath(`/categories/${WATCHLIST_ID}`);
  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request, { params: { id } }: Params) {
  console.log("DELETE", id);

  await removeMovieFromCategory(id, WATCHLIST_ID);
  revalidatePath(`/`);
  revalidatePath(`/movies/${id}`);
  revalidatePath(`/categories/${WATCHLIST_ID}`);
  return NextResponse.json({ success: true });
}
