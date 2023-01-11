# nextjs-e2e-test-playwright-sample
e2eテストのアウトプットとして、playwrightを使った　アプリケーションを作成。

next-authによる認証機能。

[yup](https://www.npmjs.com/package/yup)でフォームのバリデーションチェック

[zustand](https://github.com/pmndrs/zustand)で状態管理

ORMにprismaを使用

E2Eテスト自動化には[playwright](https://playwright.dev/)を使用

urlはこちら
https://github.com/massu-159/nextjs-e2e-test-playwright-sample


## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

### 1-3. 環境変数設定

ルートディレクトリに.envファイルを作成し、環境変数を設定してください(prismaの設定に使用)
```
DATABASE_URL="postgresql://xxxxx:xxxxxx@localhost:xxxx/xxxxx?schema=public"
```

ルートディレクトリに.env.localファイルを作成し、環境変数を設定してください(next-authの設定に使用)
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=xxxxxxxxxxxxxxxxxx

GITHUB_CLIENT_ID=xxxxxxxxxxxxxxxxxx
GITHUB_CLIENT_SECRET=xxxxxxxxxxxxxxxxxx
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- Taskリスト
  - Task一覧表示
  - Task作成処理
  - Task更新処理
  - Task削除処理
- 認証
  - ログイン(GitHub)　
  - ログアウト(GitHub)


### 2-2. 構成技術
- "next": "13.0.6"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "axios": "^0.27.2"
- "yup": "0.32.11",
- "zustand": "4.0.0"
- "prisma": "^4.7.1",
- "tailwindcss": "^3.2.4"
- "@playwright/test": "^1.29.0"