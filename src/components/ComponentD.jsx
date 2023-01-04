import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addCase from "../counter/UserSlice";

export const ComponentD = () => {
  const { entities, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCase());
  }, [dispatch]);

  console.log(entities);
  if (loading) {
    console.log(loading);
  }

  return (
    <div>
      <h2>Blog Posts</h2>
      {entities.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
export default ComponentD;
