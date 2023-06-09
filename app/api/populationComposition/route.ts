import { NextResponse } from 'next/server';

import axios from 'axios';

export const GET = async (req: Request) => {
  const BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear';
  const API_KEY = process.env.RESAS_API_KEY || '';

  const { searchParams } = new URL(req.url);
  const prefCode = searchParams.get('prefCode');

  const response = await axios
    .get(BASE_URL, {
      params: {
        prefCode,
      },
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-API-KEY': API_KEY,
      },
    })
    .then((res) => {
      if (res.data !== '400') {
        return res.data.result.data;
      } else {
        throw new Error('Failed to fetch data');
      }
    });

  return NextResponse.json(response);
};
