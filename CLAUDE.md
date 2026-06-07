# task-board

タスク管理アプリ。React + Vite で構成されたフロントエンドWebアプリケーション。

## 技術スタック

- **React 18** — UIコンポーネント・状態管理
- **Vite 6** — ビルドツール・開発サーバー
- **CSS** — スタイリング（CSSモジュール不使用、通常のCSSファイル）

## プロジェクト構成

```
task-board/
├── index.html          # エントリーポイント
├── package.json        # 依存関係・スクリプト定義
├── vite.config.js      # Vite設定
├── .gitignore
└── src/
    ├── main.jsx        # Reactルート・マウント処理
    ├── App.jsx         # メインコンポーネント（タスクロジック）
    ├── App.css         # コンポーネントスタイル
    └── index.css       # グローバルスタイル
```

## 開発ガイドライン

### コーディング規約
- JavaScriptはES6+構文を使用する（`const`/`let`、アロー関数、テンプレートリテラル等）
- `var`は使用しない
- Reactの状態管理は `useState` を使用する
- コンポーネントは関数コンポーネントで記述する（クラスコンポーネント不使用）

### 命名規則
- コンポーネント名：パスカルケース（例：`App`、`TaskItem`）
- 変数・関数名：キャメルケース（例：`taskList`、`addTask`）
- CSSクラス名：ケバブケース（例：`task-item`、`add-btn`）
- 定数：アッパースネークケース（例：`MAX_TASKS`）

### スタイル
- レスポンシブデザインを前提とする（モバイルファースト）
- CSSカスタムプロパティ（変数）を活用して色・サイズを管理する

## 開発コマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（ http://localhost:5173 で確認）
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview
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
- `node_modules/` と `dist/` はGit管理外（.gitignore で除外済み）
- データはページリロードでリセットされる（永続化が必要な場合は `localStorage` を使う）
