import { fetchPostById } from "@/lib/actions/blog.actions";

const Post = async ({ params }: { params: { id: string } }) => {
  const posts = await fetchPostById(params.id);
  const post = posts[0];
  console.log("Single Post");
  console.log(post.heading);

  return (
    <div className="py-36 px-10">
      <h2 className="text-4xl font-extrabold dark:text-white">
        {post.heading}
      </h2>
      <p className="my-4 text-lg text-gray-500">
       {post.blogbody}
      </p>
      
     
    </div>
  );
};

export default Post;
