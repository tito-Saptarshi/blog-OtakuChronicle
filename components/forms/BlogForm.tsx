"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { BlogValidation, UserValidation } from "@/lib/validations/user";
import { createUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";
import { createBlog } from "@/lib/actions/blog.actions";
import { Button } from "@/components/ui/button";

interface Props {
  user: {
    id: string;
    username: string;
  };
}

const BlogForm = ({ user }: Props) => {
  const form = useForm();

  const pathname = usePathname();
  const router = useRouter();

  // console.log("BlogForm User check");
  // console.log(user);

  const onSubmit = async (values: z.infer<typeof BlogValidation>) => {
    await createBlog({
      id: user.id,
      heading: values.heading,
      blogbody: values.blogbody,
      path: pathname,
    });

    // if (pathname === "/profile/edit") {
    //   router.back();
    // } else {
    //   router.push("/");
    // }
    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-sm mx-auto mt-28"
      >
        <FormField
          control={form.control}
          name="heading"
          render={({ field }) => (
            <FormItem className="my-5">
              <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter Heading
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="blogbody"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full my-8">
              <FormLabel className="text-base-semibold text-light-2">
                Content
              </FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                <Textarea rows={15} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post</button>
      </form>
    </Form>
  );
};

export default BlogForm;
