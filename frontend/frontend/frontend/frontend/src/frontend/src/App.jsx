export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Aiden</h2>

        <button className="new-chat">
          + Новый чат
        </button>

        <div className="models">
          <h4>Модель</h4>

          <select>
            <option>ChatGPT</option>
            <option>Claude</option>
            <option>Gemini</option>
          </select>
        </div>
      </aside>

      <main className="chat">
        <header>
          <h1>Aiden AI</h1>
        </header>

        <section className="messages">
          <h2>Добро пожаловать!</h2>
          <p>Ваш персональный AI-помощник готов к работе.</p>
        </section>

        <footer>
          <input
            type="text"
            placeholder="Введите сообщение..."
          />
          <button>Отправить</button>
        </footer>
      </main>
    </div>
  );
}
