import { WATCHLIST_ID } from "@/constants";
import { getCategoryById } from "@/db";
import { addMovieToCategory, removeMovieFromCategory } from "@/lib/api";
import exp from "constants";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

type Params = {
  request: Request,
  params: {
    id: number;
  };
};

export async function GET(request: Request, { params: { id } }: Params) {
  const [watchlist] = await getCategoryById(WATCHLIST_ID);
  const movieIds = watchlist.movieIds.split(',').map(Number);
  const movieId = movieIds.find(id => id === Number(id)); 
  return NextResponse.json({ movieId });
  // console.log("GET", id);

  // await addMovieToCategory(id, WATCHLIST_ID);
  // revalidatePath(`/`);
  // revalidatePath(`/movies/${id}`);
  // revalidatePath(`/categories/${WATCHLIST_ID}`);
  // return NextResponse.json({ success: true });
}

export async function POST(request: Request, { params: { id } }: Params) {
  console.log("POST", id);

  await addMovieToCategory(id, WATCHLIST_ID);
  revalidatePath(`/`);
  revalidatePath(`/movies/${id}`);
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
