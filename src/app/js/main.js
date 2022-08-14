// 1.expressモジュールを読み込む
const express = require("express");
const path = require("path");

// 2.expressアプリを生成する
const app = express();

// 3.ルート（http://localhost/api/node）にアクセスしてきたときに「Connected Node」を返す
app.get("/api/node", (req, res) => {
    res.send({ api: "Connected Node" });
});

// 4.ポート3000でサーバを立てる
app.listen(3000, () => {
    console.log("app running");
});
