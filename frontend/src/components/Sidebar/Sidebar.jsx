export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Aiden</h2>
      </div>

      <button className="new-chat">
        + Новый чат
      </button>

      <div className="history">
        <h3>История</h3>

        <ul>
          <li>Первый чат</li>
          <li>Второй чат</li>
          <li>Третий чат</li>
        </ul>
      </div>

      <div className="profile">
        <button>⚙ Настройки</button>
      </div>
    </aside>
  );
}
