// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createUser } from "@/backend-service/jwtFunctions";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = createUser();
  res.json(body);
}
