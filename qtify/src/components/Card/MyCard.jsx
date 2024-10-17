import { CardMedia, CardContent, Grid2 } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";

import { Chip } from "@mui/material";

function MyCard({cardData}) {


  return (
    <div>
      <Grid2
        container
        bgcolor={"black"}
        borderRadius={"1rem"}
        justifyContent={"center"}
        spacing={4}
        m={2}
        size={6}
      >
        {cardData.map((item) => {
          return (
            <div key={item.id}>
              <Card
                sx={{
                  width: 159,
                  height: 205,
                }}
              >
                <CardMedia
                  sx={{ height: 170 }}
                  image={item.image}
                  title={item.title}
                />
                <CardContent sx={{padding:0}}>
                  <Chip
                    label={`${item.follows} Follows`}
                    sx={{
                      width: 150,
                      height: 23,
                      margin: "6px",
                      borderRadius: "10px",
                      padding: "4px 8px",
                      backgroundColor: "black",
                      color: "white",
                      position: "relative",
                      justifyContent:"flex-start"
                    }}
                  />
                </CardContent>
              </Card>
              <Typography
                color={"white"}
                backgroundColor={"black"}
                variant="h5"
                component="div"
                sx={{ padding: 1 }}
              >
                {item.title}
              </Typography>
            </div>
          );
        })}
      </Grid2>
    </div>
  );
}

export default MyCard;
