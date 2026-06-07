# task-board

タスク管理アプリ。React + Vite で構成されたフロントエンドWebアプリケーション。

## 技術スタック

| 技術 | バージョン | 用途 |
|---|---|---|
| React | 18.x | UIコンポーネント・状態管理（useState / useEffect） |
| Vite | 6.x | ビルドツール・開発サーバー |
| CSS | — | スタイリング（CSSモジュール不使用、通常のCSSファイル） |
| localStorage | — | タスクデータの永続化 |
| GitHub Actions | — | CI/CD・GitHub Pagesへの自動デプロイ |

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

| 対象 | 規則 | 例 |
|---|---|---|
| コンポーネント名 | パスカルケース | `App`、`TaskItem`、`TaskList` |
| ファイル名（コンポーネント） | パスカルケース | `App.jsx`、`TaskItem.jsx` |
| 変数・関数名 | キャメルケース | `taskList`、`addTask`、`toggleTask` |
| イベントハンドラ | `handle` プレフィックス | `handleKeyDown`、`handleSubmit` |
| CSSクラス名 | ケバブケース | `task-item`、`add-btn`、`delete-btn` |
| localStorageキー | ケバブケース定数 | `STORAGE_KEY = 'task-board-tasks'` |
| 定数 | アッパースネークケース | `MAX_TASKS`、`STORAGE_KEY` |

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

## デプロイ先

https://toshiaki1225.github.io/task-board/

`main` ブランチへのプッシュをトリガーに、GitHub Actions が自動でビルド・デプロイする。
設定ファイル：`.github/workflows/deploy.yml`

## 注意事項

- バックエンド・サーバーサイド処理は一切持たない
- `node_modules/` と `dist/` はGit管理外（.gitignore で除外済み）
- データはページリロードでリセットされる（永続化が必要な場合は `localStorage` を使う）
