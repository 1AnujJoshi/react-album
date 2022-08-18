import { Link } from "react-router-dom";

import * as React from "react";
import { api } from "../api/api";
import { UpdateForm } from "./UpdateForm";
export const AlbumItem = ({ userId, id, title }) => {
  function deleteAlbum(id) {
    api.delete(`albums/${id}`).then((response) => {
      if (response.status === 200) {
        console.log("Album with Id " + id + " deleted successfully!!");
        console.warn(response.data);
      }
    });
  }
  return (
    <div id="container" key={id}>
      <div id="id">
        <h3>{id}</h3>
      </div>
      <div id="userId">
        <h3>{userId}</h3>
      </div>
      <div id="titleContainer">
        <div id="title">{title}</div>
        <div id="updateButton">
          <UpdateForm id={id} />
        </div>
        <div id="buttons">
          <Link to={`/albums/${id}/photos`}>
            <button> Open </button>
          </Link>
        </div>
        <div>
          <button onClick={() => deleteAlbum(id)}> Delete </button>
        </div>
      </div>
    </div>
  );
};
