import User from "./components/User";
import Product from "./components/Product";

function App() {
  return (
    <div>
      Hello, world!
      <User firstName={"Alexey"} lastName= {"Chechkin"} age={15} showAge={false}/>
      <User firstName={"Galina"} lastName= {"Chechkina"} age={43} showAge={true}/>
      <Product title= {"Tomato"} price= {5} count= {3.5}/>
      <Product title= {"Eggs"} price= {3} count= {0}/>
      </div>
  );
}

export default App;//используем только один в рамках файла, чтобы указать что-то одно для экспорта
