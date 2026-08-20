import "./styles/global.css";
import "./styles/app.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";

export default function App() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <Header />

        <Chat />

      </main>

    </div>
  );
}
