# Population Data Visualizer

都道府県ごとの人口構成データをグラフ化するアプリケーション。「総人口」、「年少人口」、「生産年齢人口」、「老年人口」の 4 種類で比較できます。

## Getting Started

```bash
git clone https://github.com/BonneChose-No-Suke/population-data-visualizer

yarn install

yarn dev
```

手元で動かす場合には、[RESAS api](https://opendata.resas-portal.go.jp/)で API 利用登録、API キー を取得して、.env ファイルに設定してください。

```
RESAS_API_KEY="YOUR_API_KEY"
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
