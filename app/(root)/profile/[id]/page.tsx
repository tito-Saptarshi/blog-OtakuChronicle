import UserCard from "@/components/cards/UserCard";
import { fetchPostByUserId } from "@/lib/actions/blog.actions";
import React from "react";

const Profile = async ({ params }: { params: { id: string } }) => {
  // const fetchedPosts = await fetchPostByUserId("user_2d6GSohm7bTiXPb9uljDMwVQTw6");
  const fetchedPosts = await fetchPostByUserId(params.id);
  return (
    <>
      <div className="py-24">
        <h1 className="text-3xl text-center text-black font-bold">
          View Posts
        </h1>
        <>
          {fetchedPosts.map((post) => (
            <div className="flex-row py-12">
              <UserCard
                userId={params.id}
                id={post._id}
                heading={post.heading}
                blogbody={post.blogbody}
                wordCount={50}
              />
              {/* <h1 className="text-2xl">{post.heading}</h1>
              <p className="p-2">{post.blogbody}</p> */}
            </div>
          ))}
        </>
      </div>
    </>
  );
};

export default Profile;
