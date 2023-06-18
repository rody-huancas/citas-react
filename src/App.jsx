import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

const App = () => {
  return (
    <>
      <div className="container mx-auto mt-10 ">
        <Header />
        <div className="mt-12 md:flex md:gap-5">
          <Formulario />
          <ListadoPacientes />
        </div>
      </div>
    </>
  );
};

export default App;
