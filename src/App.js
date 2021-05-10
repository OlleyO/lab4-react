import "./App.css";

import MyForm from "./MyForm/MyForm";
import ChessBoard from "./ChessBoard/ChessBoard";
import NavAndProf from "./NavAndProf/NavAndProf";

//https://random.dog/woof.json?ref=apilist.fun

function App() {
  return (
    <div className="App">
      <NavAndProf></NavAndProf>
      <div className="container">
        <div className="row">
          <div className="container col  rounded-lg border mt-5">
            <MyForm />
          </div>
          <div className="col my-auto">
            <div className="container mt-5">
              <ChessBoard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
