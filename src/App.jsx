import "./index.css";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-white mb-8">Job Application</h1>
        <Form />
      </header>
    </div>
  );
}

export default App;
