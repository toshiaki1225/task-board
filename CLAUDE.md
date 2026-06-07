# task-board

タスク管理アプリ。HTML/CSS/JavaScriptのみで構成されたフロントエンド完結型のWebアプリケーション。

## 技術スタック

- **HTML** — マークアップ・構造
- **CSS** — スタイリング・アニメーション
- **JavaScript** — タスク管理ロジック・DOM操作（バニラJS、フレームワーク不使用）

## プロジェクト構成

```
task-board/
├── index.html       # エントリーポイント
├── css/
│   └── style.css    # スタイルシート
├── js/
│   └── app.js       # アプリケーションロジック
└── data/
    └── tasks.js     # タスクデータ（初期値・定数など）
```

## 開発ガイドライン

### コーディング規約
- JavaScriptはES6+構文を使用する（`const`/`let`、アロー関数、テンプレートリテラル等）
- `var`は使用しない
- DOMの取得は `document.querySelector` / `document.querySelectorAll` を使用する
- 外部ライブラリ・フレームワークは導入しない

### 命名規則
- 変数・関数名：キャメルケース（例：`currentTask`、`addNewTask`）
- CSSクラス名：ケバブケース（例：`task-card`、`add-btn`）
- 定数：アッパースネークケース（例：`MAX_TASKS`）

### スタイル
- レスポンシブデザインを前提とする（モバイルファースト）
- CSSカスタムプロパティ（変数）を活用して色・サイズを管理する

## 動作確認

サーバー不要。`index.html` をブラウザで直接開けば動作する。

```
# ブラウザで開く（例）
start index.html
```

## Git 運用ルール

コードを変更するたびに、必ずGitHubへプッシュすること。

```bash
# 変更のたびに実行する手順
git add .
git commit -m "変更内容を簡潔に記述"
git push origin main
```

### コミットメッセージの指針
- 何を変更したか・なぜ変更したかが伝わる日本語または英語で記述する
- 例：`feat: タスク追加フォームを実装`、`fix: 削除ボタンのイベント伝播を修正`

## GitHubリポジトリ

https://github.com/toshiaki1225/task-board

## 注意事項

- バックエンド・サーバーサイド処理は一切持たない
- タスクデータは `localStorage` を使ってブラウザに保存する
- `localStorage` を使う際はブラウザ互換性に注意する
