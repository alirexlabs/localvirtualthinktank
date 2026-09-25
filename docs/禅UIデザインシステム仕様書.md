# 禅 (Zen) UIデザインテーマ仕様書 & 汎用デザインシステム

> **デザインコンセプト**: 「引き算の美学」と「静寂（しじま）」がもたらす極上の集中と心地よさ。  
> 日本の伝統美（和モダン）を現代のデジタルプロダクトに昇華させ、モバイルアプリからWebサービス、管理画面まで幅広く応用できる汎用UIデザインシステムです。

---

## 目次

1. [デザインフィロソフィー（設計思想）](#1-デザインフィロソフィー設計思想)
2. [カラートークン & パレットシステム](#2-カラートークン--パレットシステム)
3. [タイポグラフィ（組版とフォント選定）](#3-タイポグラフィ組版とフォント選定)
4. [スペーシング & レイアウト（間 - Ma の美学）](#4-スペーシング--レイアウト間---ma-の美学)
5. [エレベーション & ボーダー（境界線の設計）](#5-エレベーション--ボーダー境界線の設計)
6. [UIコンポーネント共通仕様](#6-uiコンポーネント共通仕様)
7. [モーション & インタラクション（所作 - Shosa）](#7-モーション--インタラクション所作---shosa)
8. [アプリケーション別適用ガイドライン](#8-アプリケーション別適用ガイドライン)
9. [実装用コードスニペット & デザイントークン](#9-実装用コードスニペット--デザイントークン)
   - [9.1 Vanilla CSS（CSS変数）](#91-vanilla-csscss変数)
   - [9.2 Tailwind CSS 設定ファイル](#92-tailwind-css-設定ファイル)
   - [9.3 Flutter ThemeData 設定](#93-flutter-themedata-設定)

---

## 1. デザインフィロソフィー（設計思想）

「禅 (Zen)」テーマは、情報過多な現代のデジタル環境において、**ユーザーの精神的なノイズを取り除き、本質的なタスク・思考・体験に没入させること**を目的としています。

```
┌──────────────────────────────────────────────────────────┐
│                      禅 (Zen) の三原則                    │
├──────────────────────────────────────────────────────────┤
│ 1. 削ぎ落とし (Minimalism)  : 装飾のための装飾を排す      │
│ 2. 余白の呼吸 (Negative Space) : 「間」が情報を引き立てる │
│ 3. 素材の温度 (Warm Organic) : 無機質ではなく温もりのある質感│
└──────────────────────────────────────────────────────────┘
```

### 3大コアバリュー
1. **静寂と視覚的静けさ (Visual Serenity)**  
   派手なグラデーションや原色を避け、和紙、墨、木肌、土壁を想起させるニュアンスカラーで構成します。
2. **直感的な階層構造 (Natural Hierarchy)**  
   強いコントラストの影や枠線に頼らず、文字のジャンプ率（サイズ比）、文字色濃度、そして適切な余白（Padding/Margin）によって視線誘導を行います。
3. **優雅な所作 (Graceful Interaction)**  
   急激な変化や派手なバウンスではなく、水面に波紋が広がるような滑らかで控えめなフィードバックを提供します。

---

## 2. カラートークン & パレットシステム

### 2.1 コアパレット（禅・ライトモード）

禅テーマの基本となるオフホワイト（鳥の子色・和紙調）と墨色、落ち着いた生成り（ベージュ）の配色です。

| トークン名 | HEX / RGB | 色名・由来 | 主な用途 |
| :--- | :--- | :--- | :--- |
| `zen-surface` | `#FAF9F6` | **鳥の子色 (Torinoko-iro)** | アプリ背景、ベースサーフェス |
| `zen-surface-raised` | `#FFFFFF` | **素色 (Shiro)** | カード、ダイアログ、浮き出し要素 |
| `zen-primary` | `#2D3A3A` | **深墨 (Fuka-zumi)** | メインアクション、主要テキスト、ヘッダー |
| `zen-secondary` | `#D2B48C` | **枯草色 (Kusa-iro) / 生成り** | サブアクション、アクセントタグ、選択バッジ |
| `zen-text-primary` | `#1A1A1A` | **漆黒 (Shikkoku)** | 見出し、本文（高コントラスト） |
| `zen-text-secondary` | `#666666` | **薄墨 (Usu-zumi)** | 補足テキスト、ラベル、プレースホルダー |
| `zen-border` | `#E8E6DF` | **灰白 (Kai-haku)** | 区切り線、繊細なコンポーネント外枠 |
| `zen-accent-gold` | `#C5A059` | **金茶 (Kin-cha)** | プレミアム表示、達成バッジ、ハイライト |
| `zen-accent-vermilion` | `#B22222` | **深緋 (Koki-ake)** | エラー通知、削除ボタン、警告 |
| `zen-accent-teal` | `#3B6978` | **青磁 (Seiji)** | 完了・成功ステータス、分析グラフ |

---

### 2.2 派生パレット（漆ダーク & モダン）

禅のDNAを継承しつつ、夜間利用や現代的テイストに最適化された拡張バリエーションです。

#### 漆 (Urushi) - ダークモード
- **Surface (背景)**: `#141414`（深みのある漆黒）
- **Card Surface**: `#222020`（ほのかに赤みを帯びた黒漆）
- **Primary (アクセント)**: `#C33C23`（本朱 / 朱塗り）
- **Secondary (ゴールド)**: `#D4AF37`（金箔色）
- **Text Primary**: `#F0F0F0`
- **Border**: `#3D3230`

#### モダン (Modern) - クリーンライト
- **Surface (背景)**: `#F8FAFC`（クールホワイト）
- **Card Surface**: `#FFFFFF`
- **Primary (アクセント)**: `#1E3A8A`（藍色 / インディゴ）
- **Secondary**: `#0D9488`（翡翠色 / ティール）
- **Text Primary**: `#0F172A`
- **Border**: `#E2E8F0`

---

## 3. タイポグラフィ（組版とフォント選定）

和の美しさを際立たせるため、明朝体（見出し・タイトル）と視認性の高いゴシック体（本文・UI）のハイブリッド構成を推奨します。

### 3.1 推奨フォントスタック

```css
/* 和文・欧文ハイブリッド指定 */
--font-family-serif: "Shippori Mincho", "Noto Serif JP", "Yu Mincho", serif;
--font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Sans", "Noto Sans JP", sans-serif;
--font-family-mono: "JetBrains Mono", "SF Mono", monospace;
```

### 3.2 タイポグラフィスケール

| レベル | フォントサイズ | Line-Height | Weight | Letter-Spacing | フォント系統 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display (特大)** | `36px (2.25rem)` | 1.25 | 700 (Bold) | `0.05em` | Serif（明朝） |
| **Headline (大見出し)** | `24px (1.5rem)` | 1.35 | 700 (Bold) | `0.04em` | Serif または Sans |
| **Title (中見出し)** | `18px (1.125rem)` | 1.45 | 600 (SemiBold) | `0.02em` | Sans（ゴシック） |
| **Body-Large (本文大)** | `16px (1.0rem)` | 1.65 | 400 (Regular) | `0.02em` | Sans |
| **Body (標準本文)** | `14px (0.875rem)` | 1.60 | 400 (Regular) | `0.01em` | Sans |
| **Caption (注釈・ラベル)** | `12px (0.75rem)` | 1.50 | 500 (Medium) | `0.03em` | Sans |

> **組版のポイント**: 日本語文章の可読性を高めるため、`line-height` は `1.6`〜`1.7` と一般的な欧文UI（1.4〜1.5）よりも広めに取ります。

---

## 4. スペーシング & レイアウト（間 - Ma の美学）

禅デザインの最大の特徴は**「余白を贅沢に使うこと」**です。詰め込みすぎず、コンテンツ間に息づかいを持たせます。

### 4.1 8pt グリッドシステム

```
space-2xs :  2px  (極小アジャスト)
space-xs  :  4px  (アイコンとテキストの隙間)
space-sm  :  8px  (コンポーネント内部の要素間)
space-md  : 16px  (カードの内パディング、標準余白)
space-lg  : 24px  (セクション間の区切り)
space-xl  : 32px  (大セクション間の余白)
space-2xl : 48px  (画面ヘッダー下部、主要ブロック間)
space-3xl : 64px+ (LPやブランドページのブレーク)
```

### 4.2 レイアウト原則
1. **カード内の余白比率**: パディングは上下 `16px`〜`20px`、左右 `16px`〜`24px` を基準とし、呼吸できる空間を確保。
2. **最大コンテンツ幅 (Max-Width)**:
   - モバイル: `100%` (左右マージン `16px`)
   - タブレット / コンテンツビュー: `768px` 〜 `840px` (読みやすい行長)
   - デスクトップダッシュボード: `1200px` 〜 `1440px`

---

## 5. エレベーション & ボーダー（境界線の設計）

強烈なドロップシャドウを多用せず、**「極細の境界線（1px border）」**と**「微細な環境光シャドウ」**を組み合わせて自然な奥行きを表現します。

### 5.1 ボーダー（角丸と線幅）
- **線幅**: `1px`（標準）または `0.5px`（Retinaディスプレイ向け極細境界）
- **線色**: `#E8E6DF`（背景よりわずかに濃い鳥の子グレー）
- **角丸 (Border Radius)**:
  - `radius-sm`: `4px`（タグ、バッジ、チェックボックス）
  - `radius-md`: `8px`（ボタン、入力フォーム、標準カード）
  - `radius-lg`: `16px`（モーダル、大型パネル）
  - `radius-full`: `9999px`（ピル型ボタン、アバター）

### 5.2 エレベーション（シャドウトークン）

```css
/* Level 0: フラット（境界線のみ） */
box-shadow: none;
border: 1px solid var(--zen-border);

/* Level 1: カード・リストアイテム（微細な浮遊感） */
box-shadow: 0 2px 8px rgba(45, 58, 58, 0.04), 0 1px 2px rgba(45, 58, 58, 0.02);

/* Level 2: ドロップダウン・ホバー時カード */
box-shadow: 0 8px 24px rgba(45, 58, 58, 0.06), 0 2px 6px rgba(45, 58, 58, 0.03);

/* Level 3: モーダル・ダイアログ */
box-shadow: 0 16px 40px rgba(45, 58, 58, 0.12), 0 4px 12px rgba(45, 58, 58, 0.05);
```

---

## 6. UIコンポーネント共通仕様

### 6.1 ボタン (Buttons)

| バリエーション | 背景色 | 文字色 | 枠線 | スタイル特徴 |
| :--- | :--- | :--- | :--- | :--- |
| **Primary (主ボタン)** | `#2D3A3A` (深墨) | `#FFFFFF` | なし | 落ち着いた高級感、タップ時に沈み込むフィードバック |
| **Secondary (副ボタン)** | `#FFFFFF` | `#2D3A3A` | `1px solid #E8E6DF` | 軽やかな白背景、ホバー時に微細な背景色変化 |
| **Accent / Gold (特別)** | `#D2B48C` (生成り) | `#1A1A1A` | なし | 重要CTA、登録・完了アクション |
| **Ghost / Text (控えめ)** | `transparent` | `#666666` | なし | キャンセル、補助リンク |

---

### 6.2 入力フィールド (Inputs & Forms)
- **背景色**: `#FFFFFF` (フォーカス前) → `#FFFFFF` (フォーカス時)
- **枠線**: `1px solid #E8E6DF` → フォーカス時は `1.5px solid #2D3A3A` (墨色)
- **パディング**: `12px 16px`
- **プレースホルダー**: `#999999`（控えめで視界を邪魔しない）

---

### 6.3 カード (Card / Tile)
- 背景は `#FFFFFF`。周囲に `1px solid #E8E6DF` のボーダーを施し、シャドウはごく淡く。
- カード上部や左端にアクセントカラー（例: 禅ゴールド、朱色、翡翠）の `2px`〜`3px` の細いバーを設けることで、カテゴリや状態を品よく差別化。

---

## 7. モーション & インタラクション（所作 - Shosa）

過剰なアニメーションを避け、スムーズで上質な動きを徹底します。

```css
/* トランジション基準値 */
--transition-fast: 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
--transition-normal: 250ms cubic-bezier(0.2, 0.8, 0.2, 1);
--transition-slow: 400ms cubic-bezier(0.16, 1, 0.3, 1);
```

### インタラクション原則
- **Fade & Soft Slide**: ダイアログやリスト要素の表示は、下から `4px`〜`8px` 程度スライドしつつ不透明度を `0 -> 1` へ遷移。
- **Hover**: カードホバー時は `translateY(-2px)` とシャドウの微増のみ。
- **Ripple / Tap Feedback**: タップ領域全体が激しく波打つのではなく、淡い墨色（`rgba(45, 58, 58, 0.08)`）で優しく反応。

---

## 8. アプリケーション別適用ガイドライン

「禅 (Zen)」テーマは、その静謐さと高い可読性から、様々なジャンルのWeb/モバイルアプリにシームレスに適用できます。

### 8.1 生産性・タスク・ナレッジ管理アプリ（Notion/Obsidian風）
- **特徴**: 長時間の執筆・整理でも目が疲れない環境。
- **適用例**:
  - サイドバー: `#FAF9F6`（鳥の子色）
  - メインエディタ: `#FFFFFF`
  - フォント: 本文に `15px / 1.7 line-height` の Noto Sans JP
  - 見出し（H1/H2）に明朝体を採用し、書物のような格調高さを演出。

### 8.2 EC・ブランドストア（工芸品・ライフスタイル・コスメ）
- **特徴**: 商品写真を引き立てる無駄のない背景と上品な余白。
- **適用例**:
  - 写真の背景とシームレスにつながる `#FAF9F6` のベースカラー。
  - 「カートに入れる」「購入する」ボタンに深墨 `#2D3A3A` または金茶 `#C5A059` を適用。
  - 割引やバッジも原色赤ではなく渋みのある `#B22222` を使用。

### 8.3 ダッシュボード・業務システム・アナリティクス
- **特徴**: 情報過多なグラフやテーブルをすっきりと整理。
- **適用例**:
  - チャートカラーに和の色彩（藍色、翡翠、金茶、渋朱、藤色）を割り当て。
  - テーブルのゼブラストライプを廃止し、`#E8E6DF` の細線ボーダーとホバー時の淡い背景変化で視認性を確保。

### 8.4 ヘルスケア・瞑想・ウェルネスアプリ
- **特徴**: ユーザーの心拍や呼吸を落ち着かせる穏やかなトーン。
- **適用例**:
  - 角丸を大きめ（`radius-lg: 16px`）に設定し、角のない安心感を付与。
  - マイクロアニメーションに `600ms` 以上のゆったりとしたイージングを採用。

---

## 9. 実装用コードスニペット & デザイントークン

### 9.1 Vanilla CSS（CSS変数）

```css
/* ==========================================================================
   Zen (禅) UI Design System - CSS Tokens
   ========================================================================== */
:root {
  /* Color Tokens */
  --zen-surface: #FAF9F6;
  --zen-surface-raised: #FFFFFF;
  --zen-primary: #2D3A3A;
  --zen-primary-hover: #1F2828;
  --zen-secondary: #D2B48C;
  --zen-secondary-light: #F4EBE1;
  --zen-text-primary: #1A1A1A;
  --zen-text-secondary: #666666;
  --zen-text-muted: #999999;
  --zen-border: #E8E6DF;
  --zen-border-focus: #2D3A3A;

  /* Accent & Status */
  --zen-gold: #C5A059;
  --zen-vermilion: #B22222;
  --zen-teal: #3B6978;

  /* Typography */
  --font-serif: "Shippori Mincho", "Noto Serif JP", serif;
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", sans-serif;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(45, 58, 58, 0.04);
  --shadow-md: 0 4px 12px rgba(45, 58, 58, 0.05);
  --shadow-lg: 0 12px 32px rgba(45, 58, 58, 0.08);

  /* Transitions */
  --transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* Base Body Styles */
body {
  background-color: var(--zen-surface);
  color: var(--zen-text-primary);
  font-family: var(--font-sans);
  line-height: 1.65;
  margin: 0;
  -webkit-font-smoothing: antialiased;
}

/* Zen Card Component */
.zen-card {
  background-color: var(--zen-surface-raised);
  border: 1px solid var(--zen-border);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.zen-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

/* Zen Button Component */
.zen-btn-primary {
  background-color: var(--zen-primary);
  color: #FFFFFF;
  border: none;
  border-radius: var(--radius-md);
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: var(--transition);
}

.zen-btn-primary:hover {
  background-color: var(--zen-primary-hover);
}
```

---

### 9.2 Tailwind CSS 設定ファイル

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        zen: {
          surface: '#FAF9F6',
          raised: '#FFFFFF',
          primary: {
            DEFAULT: '#2D3A3A',
            dark: '#1F2828',
            light: '#3F4F4F',
          },
          secondary: {
            DEFAULT: '#D2B48C',
            light: '#F4EBE1',
          },
          text: {
            primary: '#1A1A1A',
            secondary: '#666666',
            muted: '#999999',
          },
          border: '#E8E6DF',
          gold: '#C5A059',
          vermilion: '#B22222',
          teal: '#3B6978',
        },
      },
      fontFamily: {
        serif: ['"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        zen: '8px',
        'zen-lg': '16px',
      },
      boxShadow: {
        'zen-sm': '0 1px 3px rgba(45, 58, 58, 0.04)',
        'zen-md': '0 4px 12px rgba(45, 58, 58, 0.05)',
        'zen-lg': '0 12px 32px rgba(45, 58, 58, 0.08)',
      },
    },
  },
  plugins: [],
}
```

---

### 9.3 Flutter ThemeData 設定

```dart
// app_zen_theme.dart
import 'package:flutter/material.dart';

class ZenTheme {
  // カラーパレット
  static const Color surface = Color(0xFFFAF9F6); // 鳥の子色
  static const Color surfaceRaised = Colors.white;
  static const Color primary = Color(0xFF2D3A3A); // 深墨
  static const Color secondary = Color(0xFFD2B48C); // 生成り・ベージュ
  static const Color textPrimary = Color(0xFF1A1A1A);
  static const Color textSecondary = Color(0xFF666666);
  static const Color border = Color(0xFFE8E6DF);
  static const Color error = Color(0xFFB22222);

  static ThemeData get themeData {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,
      scaffoldBackgroundColor: surface,
      colorScheme: const ColorScheme.light(
        primary: primary,
        secondary: secondary,
        surface: surface,
        error: error,
        onPrimary: Colors.white,
        onSurface: textPrimary,
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: surface,
        foregroundColor: primary,
        elevation: 0,
        centerTitle: true,
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: primary,
          foregroundColor: Colors.white,
          elevation: 0,
          padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 24),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
            side: BorderSide.none,
          ),
          textStyle: const TextStyle(
            fontSize: 15,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      cardTheme: CardThemeData(
        color: surfaceRaised,
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
          side: const BorderSide(color: border, width: 1),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: surfaceRaised,
        contentPadding: const EdgeInsets.all(16),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: const BorderSide(color: border),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: const BorderSide(color: border),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: const BorderSide(color: primary, width: 1.5),
        ),
      ),
    );
  }
}
```

---

## 10. まとめと導入フロー

「禅 (Zen)」デザインテーマは、単なるビジュアルの装飾ではなく、**「使う人の集中を促し、心地よい静寂を提供する」**という機能的なデザイン言語です。

1. **デザイントークンの導入**: 上記の CSS変数、Tailwind設定、または Flutter ThemeData をプロジェクトに組み込みます。
2. **余白とフォントの統一**: 8ptグリッドとゆったりとした行間（`line-height: 1.65`）を適用します。
3. **境界線と影の抑制**: 濃い影を排し、1pxの淡いボーダー（`#E8E6DF`）でコンテンツを優雅に区切ります。
4. **ブランドに合わせたカスタマイズ**: 必要に応じてアクセントカラー（金茶・朱・翡翠・藍）を1〜2色選び、アプリの個性を持たせます。
