import React from "react";
import useGenres from "../hooks/useGenres";

interface Props {}

function GenreList() {
  const { genres, setGenres, error, setError, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
