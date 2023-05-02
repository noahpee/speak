import './Main.css';

let data;
let array;

function loadSettings() {
    let wordStorage = localStorage.getItem("words")
    data = JSON.parse(wordStorage); 
}

loadSettings()

function Main() {

    array = data[1].array

  return (
        Object.keys(array).map((id) => (
            <div className="beasts">
            <p>{data[array[id]].text}</p>
            </div>
        ))
  );
}

export default Main;

