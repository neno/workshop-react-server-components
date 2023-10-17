"use client"

import {addMovie} from "@/db";

export const Form = () => {

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const title = event?.target?.title.value;
    addMovie(new Date().getUTCMilliseconds().toString(), title)
  };

  return (<form onSubmit={handleSubmit}>
    <input type="text" name="title" placeholder="Title" />
    <button type="submit">Add Movie</button>
  </form>)
}