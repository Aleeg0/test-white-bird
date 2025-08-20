import RouterLayout from "@/shared/router/RouterLayout.tsx";
import "./App.scss";
import ThemeLayout from "@/shared/layouts/themeLayout/themeLayout.tsx";

function App() {
  return (
    <ThemeLayout>
      <RouterLayout />
    </ThemeLayout>
  );
}

export default App;
