import * as React from "react";
import { useEffect, useState } from "react";
import { AlbumItem } from "../components/AlbumItem";
import { api } from "../api/api";

export const Home = () => {
  const [albums, setAlbums] = useState([]);
  const fetchData = async () => {
    const response = await api.get("albums");
    setAlbums(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 id="homePageHeading">List of Albums</h1>
      <div id="container">
        <div id="id">
          <h2>Id</h2>
        </div>
        <div id="userId">
          <h2>User Id</h2>
        </div>
        <div id="titleContainer">
          <h2>Title</h2>
        </div>
      </div>
      {albums.map((album) => {
        return (
          <AlbumItem
            key={album.id}
            userId={album.userId}
            id={album.id}
            title={album.title}
          />
        );
      })}
    </div>
  );
};
