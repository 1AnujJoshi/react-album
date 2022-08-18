import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AlbumPhotos } from "../components/AlbumPhotos";
import { api } from "../api/api";

export const AlbumList = () => {
  const [albumList, setAlbumList] = useState([]);
  const params = useParams();

  const loadPhotos = async (id) => {
    api.get(`albums/${id}/photos`).then((res) => {
      setAlbumList(res.data);
    });
  };

  useEffect(() => {
    if (params.id) {
      loadPhotos(params.id);
    }
  }, [params.id]);

  return (
    <div className="grid">
      {albumList.map((album) => (
        <AlbumPhotos
          key={album.id}
          userId={album.userId}
          id={album.id}
          title={album.title}
          thumbnailUrl={album.thumbnailUrl}
          url={album.url}
        />
      ))}
    </div>
  );
};
