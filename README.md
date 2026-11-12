# BCT SDK (`bct-sdk`)

Shared TypeScript types, interfaces, and constants for **Book Club Temple (BCT)**.

---

## Installation

### From GitHub
```bash
# Using Yarn
yarn add git+https://github.com/<your-username>/bct-sdk.git

# Using npm
npm install git+https://github.com/<your-username>/bct-sdk.git
```

To pin to a specific version tag or branch:
```bash
yarn add git+https://github.com/<your-username>/bct-sdk.git#v0.0.1
```

### Local Development
To link or install locally from a sibling repository:
```bash
yarn add file:../bct-sdk
```

---

## Usage

Import enums, API models, and utility types directly from `bct-sdk`:

```ts
import {
  // Constants & Enums
  Genre,
  ClubBookStatus,
  UserRole,

  // Core Enums & Types
  Lang,
  HttpMethod,
  Id,
  QueryParams,
  QueryParamsKeys,

  // API Interfaces & Types
  Book,
  ApiBookGet,
  Club,
  ApiClubGet,
  ClubBook,
  ApiGetClubBook,
  ClubMember,
  ApiClubMemberGet,
  Rating,
  ApiRatingGet,
  User,
  ApiUserGet,

  // Utility Types
  PartialBy,
  Voidable,
  VoidableProps,
  VoidableUndefined,
} from "bct-sdk";
```

---

## What's Included

### 1. Constants (`src/constants`)
- **`Genre`** — Book genres (`Horror`, `Thriller`, `Comedy`, `Romance`, `Fantasy`, `Adventure`, `Anti-war`, `Drama`, `Action`, `Science-fiction`, `Dystopian`, `Postmodern`, `Anthology`, `Non-fiction`)
- **`ClubBookStatus`** — Reading status within a club (`COMPLETED`, `READING`, `NOTSTARTED`)
- **`UserRole`** — User permission roles (`ADMIN`, `CLUBLEADER`, `CLUBMEMBER`, `USER`)

### 2. Core Types (`src/types/core.ts`)
- **`Id`** — `string | number`
- **`Lang`** — Supported languages (`en`, `de`, `fr`, `es`)
- **`HttpMethod`** — Standard HTTP request methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, etc.)
- **`QueryParams` & `QueryParamsKeys`** — Standard query parameter keys (`language`, `limit`, `order`, `page`, `search`)

### 3. API Domain Models (`src/types/api`)
- **Book** (`Book`, `ApiBookGetList`, `ApiBookGet`)
- **Club** (`Club`, `ApiClubGetList`, `ApiClubGet`)
- **ClubBook** (`ClubBook`, `ApiGetClubBookList`, `ApiGetClubBook`)
- **ClubMember** (`ClubMember`, `ApiClubMemberGetList`, `ApiClubMemberGet`)
- **Rating** (`Rating`, `ApiRatingGetList`, `ApiRatingGet`)
- **User** (`User`, `ApiUserGetList`, `ApiUserGet`)

### 4. Utility Types (`src/types/utils.ts`)
- **`PartialBy<T, K>`** — Makes specific keys `K` of `T` optional
- **`Voidable<T>`** — `T | undefined | null`
- **`VoidableProps<T, K>`** — Makes specific keys `K` of `T` optional and nullable
- **`VoidableUndefined<T>`** — Allows `null` on any property of `T` that accepts `undefined`

---

## Development

Install dependencies and compile TypeScript to `dist/`:

```bash
# Install dependencies (automatically runs `prepare` build)
yarn install

# Manually compile TypeScript
yarn build
```

## License

MIT © DarrellRoberts
