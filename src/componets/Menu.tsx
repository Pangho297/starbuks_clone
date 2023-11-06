import { Avatar, Stack, Typography } from "@mui/material";

export default function Menu(props: {  menuName: any; }) {
  const {  menuName } = props;
  return (
   <Stack direction={"row"}>
    <Avatar src="{imgPath}"></Avatar>
    <Typography>{menuName}</Typography>
   </Stack>
  );
}