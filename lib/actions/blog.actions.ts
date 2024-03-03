"use server";

import { revalidatePath } from "next/cache";
import Blog from "../models/blog.model";
import { connectToDB } from "../mongoose";
import { log } from "console";
import { ObjectId } from "mongoose";

interface Params {
  id: string;
  heading: string;
  blogbody: string;
  path: string;
}

export async function createBlog({ id, heading, blogbody, path }: Params) {
  connectToDB();
  try {
    await Blog.create({
      id,
      heading,
      blogbody,
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error creating thread: ${error.message}`);
  }
}

export async function fetchPosts() {
  connectToDB();
  try {
    const posts = await Blog.find();

    return posts;
  } catch (error: any) {
    throw new Error(`Error creating thread: ${error.message}`);
  }
}

export async function fetchPostByUserId(id: string) {
  connectToDB();
  const fieldName = "id";
  try {
    const posts = await Blog.find({ [fieldName]: id });

    console.log(posts);
    return posts;
  } catch (error: any) {
    throw new Error(`Error creating thread: ${error.message}`);
  }
}

export async function fetchPostById(id: string) {
  connectToDB();
  const fieldName = "_id";
  try {
    const post = await Blog.find({ [fieldName]: id });

    return post;
  } catch (error: any) {
    throw new Error(`Error creating thread: ${error.message}`);
  }
}

// export async function fetchUserIdByPostId(id: ObjectId) {
//   connectToDB();
//   const fieldName = "id";
//   try {
//     const userId = await Blog.find({ [fieldName]: id });
//     console.log("fetchUserIdByPostId");
//     console.log(userId);
    
    
//     return userId;
//   } catch (error: any) {
//     throw new Error(`Error creating thread: ${error.message}`);
//   }
// }