import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ height: '100%' }}>
      <nav style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: 12, backgroundColor: '#121212' }}>
        <a href="/" style={{ display: "flex", alignItems: 'center' }}>
          <img src={'/android-chrome-512x512.png'} alt="Doodle Logo" width={40} height={40} style={{ paddingRight: 15 }} />
          <h1 style={{ fontSize: '3rem', margin: 0 }}>Doodle</h1>
        </a>
      </nav>
      <div>
        
      </div>
      <h1>😢 Mining doesn't work anymore</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          This is a button: {count}
        </button>
        <p>
          I'm still working on the generative art portion of this project.
        </p>
      </div>
      <p class="read-the-docs">
        Tell me what your other money making ideas are!
      </p>
    </div>
  )
}
