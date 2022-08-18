import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export function AlbumPhotos({ id, title, thumbnailUrl, url, userId }) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 500, margin: 5 }}>
      <CardMedia component="img" height="194" image={url} alt="Paella dish" />
      <CardContent>
        <div
          style={{
            minHeight: "50px",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Id:{id}- {title}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
