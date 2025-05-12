import Header from './components/shared/header/Header';
import AppRoutes from './routes';

const App = () => {
  return (
    <div className="bg-secondary lg:px-[200px]">
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
