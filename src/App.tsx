import "./App.css";

export default function App(): React.ReactElement {
  return (
    <div className="bg-slate-900 p-10 min-h-screen">
      <div className="p-6 max-w-sm mx-auto  bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img src="/vite.svg" alt="Vite logo" />
        </div>

        <div>
          <h3 className="text-xl font-medium text-black">Vite JS</h3>
          <p className="text-slate-500">
            We are starting to hit a performance bottleneck for JavaScript based
            tooling
          </p>
        </div>
      </div>
    </div>
  );
}
