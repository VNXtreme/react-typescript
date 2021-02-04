winboard_v8_react
===

# Command

### 開発用サーバを立てる

```
yarn start
```

### Prduction用ビルド

```
yarn build
```

### Storybookを起動

```
yarn storybook
```

### ESLint実行

```
yarn lint
```

# `src`配下のモジュール構成

```
src/
├── api        API関連の処理
├── assets     変換前のsvgファイルなど
├── components Reactコンポーネント
├── domain     ドメインロジック
├── hooks      共通で利用できるHooksを置く
├── modules    Redux関連の処理
├── stories    Storybookのファイル
└── types      型定義(基本的は触らない)
```

# コンポーネントの分類

* atoms
  * 最小単位のコンポーネント
  * 再利用されるもの
  * 他のコンポーネントは利用しないこと
  * 原則的に他のコンポーネントに影響を及ぼすmarginを持たないこと(レイアウトなどを除く)
* molecules
  * Atomを組み合わせたコンポーネント
  * 再利用されるもの
  * atomsを利用できる
* organismos
  * 下位層(atoms, molecules)を組み合わせてつくる１つの意味をもつコンポーネント
  * organismosをつかってもよい
* templates
  * organismosを組み合わせて配置するコンポーネント
  * 現状利用なし
* pages
  * react-routerでルーティングされる単位
  * redux-storeとの接続は、原則pagesでのみ行う

# modules(redux関連処理)について

* redux関連のファイルは `src/modules` 配下に配置します
* `src/modules` 直下のディレクトリは、原則データ単位とします
* 各module毎に以下のファイルを持ちます
  * index.ts
    - reducerをexportします
  * actions.ts
    - Action typeの定義、Actionを持ちます
  * reducer.ts
    - Storeの型定義、reducer処理を持ちます

# domainについて

* Reactなどのフレームワークとは独立ロジックを扱う
  - APIデータを表示データに変換
  - バリデーションロジック
* APIから受け取ったデータを格納する

# Storybookについて

- atoms, molecules(organismosは任意)にコンポーネントを追加したら、Storybookにも追加する

# SVGデータの扱い

* Icon, Logoなどに変更がある場合は`/src/assets`配下にファイルを追加して下記コマンドでReact componentに変換する
  - Iconの場合
    `yarn svgr:icon`
  - Logoの場合
    `yarn svgr:logo`
