import MainLayout from "./components/layouts/MainLayout";
import { useTheme } from "./context/ThemeContaxt";

const App = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme.background, color: theme.text }}>
      <MainLayout />
    </div>
  );
};

export default App;
