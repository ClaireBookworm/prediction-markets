// pages/api/post/index.ts

import { getSession } from "next-auth/client";
import prisma from "../../../lib/prisma";
// Update the API route to modify the database using the Prisma Client.

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
	  author: { connect: { email: "clara32356@gmail.com" } },
    //   author: { connect: { email: session?.user?.email } },
		published: true,
    },
  });
  res.json(result);
}
