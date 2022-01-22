import { NextComponentType, NextPageContext } from "next";

type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Post: NextComponentType<NextPageContext, {}, PostProps> = ({
  userId,
  id,
  title,
  body,
}) => {
  return (
    <div>
      <p>User ID: {userId}</p>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <br />
    </div>
  );
};

export default Post;
