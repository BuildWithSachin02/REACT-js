# ⚛️ React.js — Complete Study Notes & Reference Guide

> A personal reference README covering everything you need to know about React.js — from basics to advanced concepts. Come back here whenever you need a quick refresher.

---

## 📚 Table of Contents

1. [What is React?](#1-what-is-react)
2. [Core Concepts](#2-core-concepts)
3. [JSX](#3-jsx)
4. [Components](#4-components)
5. [Props](#5-props)
6. [State](#6-state)
7. [Hooks (Complete Guide)](#7-hooks-complete-guide)
8. [Event Handling](#8-event-handling)
9. [Conditional Rendering](#9-conditional-rendering)
10. [Lists & Keys](#10-lists--keys)
11. [Forms & Controlled Components](#11-forms--controlled-components)
12. [Component Lifecycle](#12-component-lifecycle)
13. [Context API](#13-context-api)
14. [React Router](#14-react-router)
15. [Performance Optimization](#15-performance-optimization)
16. [Common Patterns](#16-common-patterns)
17. [Important Rules & Best Practices](#17-important-rules--best-practices)
18. [Quick Cheat Sheet](#18-quick-cheat-sheet)

---

## 1. What is React?

- React is a **JavaScript library** for building User Interfaces (UI), developed by **Meta (Facebook)**.
- It follows a **component-based architecture** — break UI into small, reusable pieces.
- React uses a **Virtual DOM** to efficiently update only the parts of the real DOM that changed.
- React is **declarative** — you describe *what* you want the UI to look like, React handles *how* to render it.

### Why React?
| Feature | Benefit |
|---|---|
| Virtual DOM | Fast UI updates |
| Component-based | Reusable, maintainable code |
| Unidirectional data flow | Predictable state management |
| Huge ecosystem | Libraries for everything |
| React Native | Build mobile apps with same knowledge |

---

## 2. Core Concepts

```
React App
  └── Root Component (App)
        ├── Header Component
        ├── Main Component
        │     ├── Card Component
        │     └── Card Component
        └── Footer Component
```

- **Component** → Independent, reusable piece of UI
- **Props** → Data passed *into* a component (read-only)
- **State** → Data managed *inside* a component (can change)
- **Render** → What the component displays on screen

---

## 3. JSX

JSX = **JavaScript XML** — lets you write HTML inside JavaScript.

```jsx
// JSX looks like HTML but it's JavaScript
const element = <h1>Hello, World!</h1>;

// Under the hood, JSX compiles to:
const element = React.createElement('h1', null, 'Hello, World!');
```

### JSX Rules — ⚠️ IMPORTANT

```jsx
// ✅ Must return ONE parent element
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// ✅ Or use Fragment (no extra DOM node)
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);

// ✅ JavaScript expressions go inside { }
const name = "Arjun";
return <h1>Hello, {name}!</h1>;
return <h1>2 + 2 = {2 + 2}</h1>;

// ✅ className instead of class
return <div className="container">...</div>;

// ✅ Self-closing tags must close
return <img src="photo.jpg" />;
return <input type="text" />;

// ✅ Inline styles use camelCase and object
return <p style={{ fontSize: '16px', backgroundColor: 'blue' }}>Text</p>;

// ❌ Comments go inside { }
return (
  <div>
    {/* This is a JSX comment */}
    <p>Hello</p>
  </div>
);
```

---

## 4. Components

### Function Component (Modern — Use This)

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow function style
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// With destructuring
const Greeting = ({ name, age }) => {
  return <h1>Hello {name}, you are {age} years old!</h1>;
};
```

### Class Component (Old — Know It, But Prefer Functions)

```jsx
import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### Component File Structure (Best Practice)

```
src/
  components/
    Button/
      Button.jsx
      Button.css
  pages/
    Home.jsx
    About.jsx
  App.jsx
  main.jsx
```

---

## 5. Props

Props = **Properties** — data passed from parent to child.

```jsx
// Parent passes props
function App() {
  return <UserCard name="Arjun" age={22} isAdmin={true} />;
}

// Child receives props
function UserCard({ name, age, isAdmin }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isAdmin && <span>Admin</span>}
    </div>
  );
}
```

### Default Props

```jsx
function Button({ text = "Click Me", color = "blue" }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}
```

### Children Prop

```jsx
// Parent
function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>Card content here</p>
    </Card>
  );
}

// Child uses props.children
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

### ⚠️ Props are READ-ONLY — never modify props inside a component!

---

## 6. State

State = data that **can change** over time and causes re-render when updated.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // [value, setter]

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### State with Objects

```jsx
const [user, setUser] = useState({ name: '', email: '' });

// ✅ Always spread when updating objects
setUser({ ...user, name: 'Arjun' });

// ❌ Never mutate directly
user.name = 'Arjun'; // WRONG!
```

### State with Arrays

```jsx
const [items, setItems] = useState([]);

// Add item
setItems([...items, newItem]);

// Remove item
setItems(items.filter(item => item.id !== id));

// Update item
setItems(items.map(item => item.id === id ? { ...item, done: true } : item));
```

### ⚠️ Key State Rules

- **Never mutate state directly** — always use the setter function
- State updates are **asynchronous** (batched)
- Use functional updates when new state depends on old state:

```jsx
// ✅ Safe when relying on previous state
setCount(prev => prev + 1);
setItems(prev => [...prev, newItem]);
```

---

## 7. Hooks (Complete Guide)

Hooks let function components use state, lifecycle, and other React features.

> **Hook Rule #1:** Only call Hooks at the **top level** (not inside loops, conditions, or nested functions)
> **Hook Rule #2:** Only call Hooks inside **React function components** (or custom Hooks)

---

### `useState` — Manage Local State

```jsx
const [value, setValue] = useState(initialValue);

// Examples
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [isOpen, setIsOpen] = useState(false);
const [items, setItems] = useState([]);
const [user, setUser] = useState(null);
```

---

### `useEffect` — Side Effects

Run code after render: fetch data, subscriptions, timers, DOM manipulation.

```jsx
import { useEffect } from 'react';

// ▶ Runs after EVERY render
useEffect(() => {
  console.log('Component rendered');
});

// ▶ Runs ONCE on mount (empty dependency array)
useEffect(() => {
  console.log('Component mounted');
  fetchData();
}, []);

// ▶ Runs when 'count' changes
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

// ▶ Cleanup function (runs on unmount or before next effect)
useEffect(() => {
  const timer = setInterval(() => tick(), 1000);
  return () => clearInterval(timer); // cleanup
}, []);

// ▶ Fetch data pattern
useEffect(() => {
  const fetchUsers = async () => {
    const res = await fetch('https://api.example.com/users');
    const data = await res.json();
    setUsers(data);
  };
  fetchUsers();
}, []);
```

---

### `useContext` — Access Context

```jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={theme}>
      Toggle Theme
    </button>
  );
}
```

---

### `useRef` — Access DOM / Persist Values

```jsx
import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Directly access DOM element
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

// useRef to store value without re-render
function Timer() {
  const timerRef = useRef(null);

  const start = () => {
    timerRef.current = setInterval(() => console.log('tick'), 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };
}
```

---

### `useReducer` — Complex State Logic

```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    case 'RESET':     return { count: 0 };
    default:          return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

---

### `useMemo` — Memoize Expensive Calculations

```jsx
import { useMemo } from 'react';

function ExpensiveList({ items, filter }) {
  // Only recalculates when items or filter changes
  const filteredItems = useMemo(() => {
    return items.filter(item => item.name.includes(filter));
  }, [items, filter]);

  return <ul>{filteredItems.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}
```

---

### `useCallback` — Memoize Functions

```jsx
import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, handleClick is recreated on every render
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // only created once

  return <Child onClick={handleClick} />;
}
```

---

### Custom Hooks — Reuse Logic

```jsx
// useFetch.js — reusable data fetching hook
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
function Users() {
  const { data, loading, error } = useFetch('https://api.example.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

> **Custom Hook naming convention:** Always start with `use` (e.g., `useFetch`, `useAuth`, `useLocalStorage`)

---

## 8. Event Handling

```jsx
// onClick
<button onClick={handleClick}>Click</button>
<button onClick={() => handleClick(id)}>Click with arg</button>

// onChange (inputs)
<input onChange={(e) => setName(e.target.value)} />

// onSubmit (forms)
<form onSubmit={handleSubmit}>...</form>

function handleSubmit(e) {
  e.preventDefault(); // ← Always prevent default on forms!
  // handle form data
}

// onKeyDown, onKeyUp
<input onKeyDown={(e) => {
  if (e.key === 'Enter') handleEnter();
}} />

// onMouseEnter, onMouseLeave
<div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
  Hover me
</div>
```

---

## 9. Conditional Rendering

```jsx
// Method 1: if/else
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) return <h1>Welcome back!</h1>;
  return <h1>Please log in.</h1>;
}

// Method 2: Ternary operator (inline)
return (
  <div>
    {isLoggedIn ? <UserDashboard /> : <LoginPage />}
  </div>
);

// Method 3: && (short-circuit) — show or show nothing
return (
  <div>
    {isAdmin && <AdminPanel />}
    {error && <p className="error">{error}</p>}
  </div>
);

// Method 4: Nullish — show nothing (return null)
function Alert({ show, message }) {
  if (!show) return null;
  return <div className="alert">{message}</div>;
}
```

---

## 10. Lists & Keys

```jsx
const fruits = ['Apple', 'Banana', 'Mango'];

// ✅ Always add unique key prop when rendering lists
return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>   // index is okay if list doesn't reorder
    ))}
  </ul>
);

// ✅ Better — use unique ID from data
const users = [
  { id: 1, name: 'Arjun' },
  { id: 2, name: 'Priya' },
];

return (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

### ⚠️ Key Rules
- Keys must be **unique among siblings**
- Keys help React identify which items changed
- **Never use array index as key** if items can be added/removed/reordered
- Keys are **not accessible as props** in the component

---

## 11. Forms & Controlled Components

A **controlled component** is an input whose value is controlled by React state.

```jsx
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Checkbox & Select

```jsx
// Checkbox
const [agreed, setAgreed] = useState(false);
<input
  type="checkbox"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>

// Select dropdown
const [country, setCountry] = useState('India');
<select value={country} onChange={(e) => setCountry(e.target.value)}>
  <option value="India">India</option>
  <option value="USA">USA</option>
</select>
```

---

## 12. Component Lifecycle

### Lifecycle in Function Components (via useEffect)

| Lifecycle Phase | Class Component | Function Component |
|---|---|---|
| Mount | `componentDidMount` | `useEffect(() => {}, [])` |
| Update | `componentDidUpdate` | `useEffect(() => {}, [dep])` |
| Unmount | `componentWillUnmount` | `useEffect(() => { return () => {} }, [])` |

```jsx
function MyComponent() {

  // componentDidMount — runs once on mount
  useEffect(() => {
    console.log('Mounted!');

    // componentWillUnmount — cleanup
    return () => {
      console.log('Unmounted!');
    };
  }, []);

  // componentDidUpdate — runs when value changes
  useEffect(() => {
    console.log('value changed:', value);
  }, [value]);

}
```

---

## 13. Context API

Context = a way to pass data deeply without prop drilling.

```jsx
// 1. Create context
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// 2. Create Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook to use context
export function useAuth() {
  return useContext(AuthContext);
}

// 4. Wrap app with provider (in main.jsx or App.jsx)
function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

// 5. Use anywhere in the tree
function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <span>{user?.name}</span>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
```

---

## 14. React Router

Install: `npm install react-router-dom`

```jsx
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom';

// Setup routes
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*"          element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Navigation
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
        About
      </NavLink>
    </nav>
  );
}

// URL params
function UserDetail() {
  const { id } = useParams();
  return <p>User ID: {id}</p>;
}

// Programmatic navigation
function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // after login...
    navigate('/dashboard');
    // navigate(-1) to go back
  };
}
```

---

## 15. Performance Optimization

### `React.memo` — Prevent Re-renders

```jsx
import { memo } from 'react';

// Only re-renders if props change
const UserCard = memo(function UserCard({ name, age }) {
  return <div>{name} - {age}</div>;
});
```

### `useMemo` — Expensive Computations

```jsx
const expensiveResult = useMemo(() => {
  return heavyCalculation(data);
}, [data]); // recalculates only when data changes
```

### `useCallback` — Stable Function References

```jsx
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]); // stable reference, new function only when id changes
```

### Lazy Loading (Code Splitting)

```jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
```

---

## 16. Common Patterns

### Lifting State Up

When two siblings need to share state → move state to their parent.

```jsx
function Parent() {
  const [value, setValue] = useState('');

  return (
    <>
      <InputChild value={value} onChange={setValue} />
      <DisplayChild value={value} />
    </>
  );
}
```

### Component Composition (avoid prop drilling)

```jsx
function Layout({ header, sidebar, content }) {
  return (
    <div>
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{content}</main>
    </div>
  );
}

// Usage
<Layout
  header={<NavBar />}
  sidebar={<SideMenu />}
  content={<MainContent />}
/>
```

### Error Boundary

```jsx
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

---

## 17. Important Rules & Best Practices

### ✅ DO These

- Keep components **small and focused** (one responsibility)
- Name components with **PascalCase** (`UserCard`, not `userCard`)
- Name hooks with **`use` prefix** (`useAuth`, `useFetch`)
- Use **functional components** (not class components)
- Always add **keys** when rendering lists
- Use **`e.preventDefault()`** in form submit handlers
- Lift state **as low as possible** in the tree
- Use **TypeScript** for larger projects
- **Separate concerns** — logic in hooks, UI in components

### ❌ AVOID These

- Never **mutate state directly** (`state.value = x` is wrong)
- Never call hooks **inside conditions or loops**
- Don't use **array index as key** if list can reorder
- Avoid **deeply nested components** (extract into separate files)
- Don't do **heavy logic in JSX** — extract to functions/hooks
- Avoid **overusing Context** (use for truly global state only)
- Don't fetch data **without cleanup** in useEffect

---

## 18. Quick Cheat Sheet

```jsx
// ─── COMPONENT ────────────────────────────────────
const MyComp = ({ name, children }) => <div>{name}{children}</div>;

// ─── STATE ────────────────────────────────────────
const [count, setCount] = useState(0);
setCount(prev => prev + 1);         // functional update

// ─── EFFECT ───────────────────────────────────────
useEffect(() => { /* side effect */ }, [dep]);
useEffect(() => { return () => { /* cleanup */ }; }, []);

// ─── REF ──────────────────────────────────────────
const ref = useRef(null);
<input ref={ref} />  →  ref.current.focus();

// ─── CONTEXT ──────────────────────────────────────
const Ctx = createContext(null);
<Ctx.Provider value={data}>{children}</Ctx.Provider>
const data = useContext(Ctx);

// ─── MEMO / CALLBACK ──────────────────────────────
const memoVal = useMemo(() => expensive(x), [x]);
const memoFn  = useCallback(() => fn(x), [x]);

// ─── LIST RENDERING ───────────────────────────────
{items.map(item => <Li key={item.id} {...item} />)}

// ─── CONDITIONAL ──────────────────────────────────
{flag && <Component />}
{flag ? <A /> : <B />}

// ─── EVENT ────────────────────────────────────────
<button onClick={() => handle(id)}>Click</button>
<input onChange={e => setValue(e.target.value)} />
<form onSubmit={e => { e.preventDefault(); submit(); }}>

// ─── ROUTER ───────────────────────────────────────
<Link to="/path">Go</Link>
const { id } = useParams();
const navigate = useNavigate();  navigate('/home');
```

---

## 🛠️ Useful Tools & Libraries

| Category | Library |
|---|---|
| Styling | Tailwind CSS, styled-components, CSS Modules |
| Forms | React Hook Form, Formik |
| State Management | Redux Toolkit, Zustand, Jotai |
| Data Fetching | TanStack Query (React Query), SWR |
| Routing | React Router DOM |
| UI Components | shadcn/ui, MUI, Chakra UI, Ant Design |
| Animation | Framer Motion |
| Testing | Vitest, React Testing Library, Playwright |

---

## 🚀 Learning Roadmap

```
Beginner
  ✅ JSX syntax
  ✅ Function components
  ✅ Props and state
  ✅ Event handling
  ✅ Lists and keys
  ✅ Conditional rendering

Intermediate
  ✅ useEffect (data fetching, cleanup)
  ✅ useRef, useContext
  ✅ Forms (controlled components)
  ✅ React Router
  ✅ Custom Hooks
  ✅ Component composition

Advanced
  ⬜ useReducer + Context (state management)
  ⬜ Performance (memo, useMemo, useCallback)
  ⬜ Lazy loading + Suspense
  ⬜ Error Boundaries
  ⬜ TypeScript with React
  ⬜ Testing (React Testing Library)
  ⬜ State libraries (Redux Toolkit / Zustand)
```

---

> 💡 **Tip:** The best way to learn React is to **build projects**. Start with a Counter → Todo App → Weather App → Full CRUD App.

> 📖 **Official Docs:** [react.dev](https://react.dev) — The new React docs are excellent!
