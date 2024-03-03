
import Image from "next/image";
import { UserButton, currentUser } from "@clerk/nextjs";
import { fetchPosts } from "@/lib/actions/blog.actions";
import Hero from "@/components/shared/Hero";
import BlogCard from "@/components/cards/BlogCard";

export default async function Home() {
  const fetchedPosts = await fetchPosts();
  // const user = await currentUser();

  // console.log(fetchedPosts.length);


  return (
    <main className="mt-28 w-full">
      {/* <UserButton /> */}
      <Hero />

      {fetchedPosts.length === 0 ? (
        
        <div className="mx-auto">
          <p className="text-3xl mx-auto w-full text-center">
            No threads found
          </p>
        </div>
      ) : (
        <>
          {fetchedPosts.reverse().map((post) => (
            <div className="flex-row py-10 lg:px-10">
              <BlogCard 
                id={post._id}
                heading={post.heading}
                blogbody={post.blogbody}
                wordCount={100}
              />
              {/* <h1 className="text-2xl">{post.heading}</h1>
              <p className="p-2">{post.blogbody}</p> */}
            </div>
            
          ))}
        </>
        // <div>
        //   <h1>hey there</h1>
        // </div>
      )}
    </main>
    // <div>
    //   <UserButton afterSignOutUrl="/"/>
    // </div>
  );
}
