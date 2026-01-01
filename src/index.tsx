/**
 * zOS App Template
 *
 * This is a template for creating zOS applications.
 * Replace this component with your own app logic.
 *
 * @example
 * ```tsx
 * import MyApp from '@zos-apps/my-app';
 *
 * // The app is automatically registered with zOS
 * // through the package.json zos manifest
 * ```
 */

import { useState } from 'react';

export interface MyAppProps {
  /** Initial message to display */
  initialMessage?: string;
}

/**
 * Main app component
 */
export function MyApp({ initialMessage = 'Hello, zOS!' }: MyAppProps) {
  const [message, setMessage] = useState(initialMessage);
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: '#fff',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 600,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {message}
      </h1>

      <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}>
        Welcome to your new zOS app
      </p>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '0.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
        >
          -
        </button>

        <span
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            minWidth: '4rem',
            textAlign: 'center',
          }}
        >
          {count}
        </span>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '0.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
        >
          +
        </button>
      </div>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a message..."
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1rem',
          fontSize: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '0.5rem',
          background: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          width: '100%',
          maxWidth: '300px',
          outline: 'none',
        }}
      />

      <p
        style={{
          marginTop: '2rem',
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        Edit <code style={{ color: '#667eea' }}>src/index.tsx</code> to customize
      </p>
    </div>
  );
}

export default MyApp;
