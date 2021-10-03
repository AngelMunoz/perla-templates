import { Logo } from './logo.jsx'

export function App(props) {
  return (
    <>
      <Logo />
      <p>Hello Perla + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
