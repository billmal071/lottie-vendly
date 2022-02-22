// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axiosHook from "@/helpers/axiosHook";
import { Result } from "@/interfaces/resultType";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result | { message: string }>
) {
  const { username } = req.query;
  try {
    const { data } = await axiosHook.get(`/users/by?usernames=${username}`);
    // console.log(response.data);
    res.status(200).json(data);
  } catch (err: any) {
    console.log(err);
    res.json({ message: err.message });
  }
}
