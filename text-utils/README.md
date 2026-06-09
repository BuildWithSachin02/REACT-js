# 📝 TextUtils
# 📺 OUTPUT-LINK -> https://drive.google.com/file/d/1a_Ba7P1uOhmswbWMTVD99j0JquTZItV8/view?usp=drive_link

A simple and handy **React-based text utility app** that lets you manipulate, analyze, and manage text right in the browser — with persistent state via `localStorage`.

---

## 🚀 Features

| Feature | Description |
|---|---|
| **To Uppercase** | Converts all text to UPPERCASE |
| **To Lowercase** | Converts all text to lowercase |
| **Count Letters** | Counts the total number of characters in the text |
| **Count Words** | Counts the total number of words in the text |
| **Reading Speed** | Estimates reading time based on an average speed of 180 words/minute |
| **Clear** | Resets all text and stats, and clears localStorage |
| **Persistent Storage** | All text and stats are saved to `localStorage` and restored on page reload |

---

## 🛠️ Tech Stack

- **React** (with Hooks: `useState`, `useEffect`)
- **Bootstrap 5** (for UI styling)
- **localStorage** (for data persistence)

---

## 📁 Project Structure

```
textutils/
├── src/
│   └── components/
│       └── Textutils.jsx   # Main component
├── public/
│   └── index.html
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/textutils.git

# 2. Navigate into the project
cd textutils

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will run at `http://localhost:3000`

---

## 🧠 How It Works

### Reading Speed Formula

```
Reading Time (seconds) = (Word Count × 60) / 180
```

- **60** — converts minutes to seconds
- **180** — average human reading speed (words per minute)

### localStorage Keys

| Key | Value |
|---|---|
| `text` | The current textarea content |
| `count` | Total character count |
| `word` | Total word count |
| `speed` | Estimated reading speed |

---

## 📸 UI Overview

- A `<textarea>` for text input
- Action buttons row (Uppercase, Lowercase, Count Letters, Count Words, Reading Speed, Clear)
- A live stats panel showing: current text, character count, word count, and reading speed

---

## 🐛 Known Issues / Improvements

- The textarea uses `defaultValue` instead of `value`, so programmatic text changes (uppercase/lowercase) won't reflect in the textarea visually. To fix, switch to controlled input using `value={text}`.
- Word count splits on single spaces only; multiple spaces between words may inflate the count.
