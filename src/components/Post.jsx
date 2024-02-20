import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const Post = () => {
  return (
    <div>
      {/* First Card */}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "brown" }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Sana"
          subheader="September 24, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      {/* Second Card */}
      <Card sx={{ margin: 5 }}>
        {/* Add the necessary content for the second card */}
        {/* You can customize the avatar, title, content, image, etc. */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Another User"
          subheader="October 10, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Another dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Another exciting dish to share with your friends.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* Customize the favorite icon as needed */}
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "green" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            {/* Customize the share icon as needed */}
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 5 }}>
        {/* Add the necessary content for the second card */}
        {/* You can customize the avatar, title, content, image, etc. */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Another User"
          subheader="October 10, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/3094345/pexels-photo-3094345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Another dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Another exciting dish to share with your friends.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* Customize the favorite icon as needed */}
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "green" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            {/* Customize the share icon as needed */}
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 5 }}>
        {/* Add the necessary content for the second card */}
        {/* You can customize the avatar, title, content, image, etc. */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Another User"
          subheader="October 10, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/916340/pexels-photo-916340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Another dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Another exciting dish to share with your friends.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* Customize the favorite icon as needed */}
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "green" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            {/* Customize the share icon as needed */}
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 5 }}>
        {/* Add the necessary content for the second card */}
        {/* You can customize the avatar, title, content, image, etc. */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Another User"
          subheader="October 10, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/3342697/pexels-photo-3342697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Another dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Another exciting dish to share with your friends.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* Customize the favorite icon as needed */}
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "green" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            {/* Customize the share icon as needed */}
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 5 }}>
        {/* Add the necessary content for the second card */}
        {/* You can customize the avatar, title, content, image, etc. */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Another User"
          subheader="October 10, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/267104/pexels-photo-267104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Another dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Another exciting dish to share with your friends.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* Customize the favorite icon as needed */}
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "green" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            {/* Customize the share icon as needed */}
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
