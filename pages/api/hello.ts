import type { NextApiRequest, NextApiResponse } from 'next'

type HelloRes = {
  text: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HelloRes>) {
  res.status(200).json({ text: 'Hello' });
}
