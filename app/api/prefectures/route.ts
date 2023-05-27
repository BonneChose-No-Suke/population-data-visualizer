// GETのルートを定義する
import { NextResponse } from 'next/server';

export const GET = async () => {
  const URL = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
  const API_KEY = process.env.RESAS_API_KEY!;

  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-API-KEY': API_KEY,
    },
  });

  const data = await response.json();

  return NextResponse.json({ data: data.result });
};
