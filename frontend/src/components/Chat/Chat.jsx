export default function Chat() {
  return (
    <section className="chat-window">

      <div className="welcome">

        <h2>Добро пожаловать в Aiden</h2>

        <p>
          Начните диалог с искусственным интеллектом.
        </p>

      </div>

      <div className="chat-input">

        <input
          type="text"
          placeholder="Введите сообщение..."
        />

        <button>
          Отправить
        </button>

      </div>

    </section>
  );
}
