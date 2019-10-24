import React, { useState } from "react";

import Person from "./Person/Person";

import "./App.css";

function App() {
  const [persons, setAttr] = useState({
    person: [{ name: "Max", age: 23 }, { name: "Daniel", age: 27 }]
  });

  return (
    <div className="App">
      <Person name={"Alan"} age={27} />
      <Person
        name={persons.person[0].name}
        age={persons.person[0].age}
        changed={event =>
          setAttr({
            person: [
              { name: event.target.value, age: 23 },
              { ...persons.person[1] }
            ]
          })
        }
      />

      <Person
        click={() =>
          setAttr({
            person: [{ ...persons.person[0] }, { name: "Moritz", age: 102 }]
          })
        }
        name={persons.person[1].name}
        age={persons.person[1].age}
      >
        My Hobby: Playing WoW - For the Horde!!^1
      </Person>

      <button
        onClick={() =>
          setAttr({
            person: [{ name: "Sascha", age: 29 }, { ...persons.person[1] }]
          })
        }
      >
        Switch it!
      </button>
    </div>
  );
}

export default App;
