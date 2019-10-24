import React, { useState } from "react";

import Person from "./Person/Person";

import "./App.css";

function App() {
  const [people, setPeople] = useState({
    person: [{ name: "Max", age: 23 }, { name: "Daniel", age: 27 }]
  });

  return (
    <div className="App">
      <Person name={"Alan"} age={27} />

      <Person
        name={people.person[0].name}
        age={people.person[0].age}
        //React hook - Ändert namen auf der Seite mit jedem Keystroke
        changed={event =>
          setPeople({
            person: [
              { name: event.target.value, age: 23 },
              { ...people.person[1] }
            ]
          })
        }
      />

      <Person
        //Hook - ändert namen wenn du auf den Paragraph klickst
        click={() =>
          setPeople({
            person: [{ ...people.person[0] }, { name: "Moritz", age: 102 }]
          })
        }
        name={people.person[1].name}
        age={people.person[1].age}
      >
        My Hobby: Playing WoW - For the Horde!!^1
      </Person>

      <button
        onClick={() =>
          setPeople({
            person: [{ name: "Sascha", age: 29 }, { ...people.person[1] }]
          })
        }
      >
        Switch it!
      </button>
    </div>
  );
}

export default App;
