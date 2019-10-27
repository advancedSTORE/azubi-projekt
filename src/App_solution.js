import React, { useState } from "react";

import Person from "./Person/Person";

import "./App.css";

function App() {
  const [people, setPeople] = useState({
    person: [{ name: "Max", age: 23 }, { name: "Daniel", age: 27 }]
  });

  const [showPerson, setShowPerson] = useState(false)

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  /* JavaScript lösung
  let people = null;
  if(showPerson){
    people = (
      <div> 
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

      </div>
    )
  }
  */

  return (
    <div className="App">
      <button
        style = {style}
        onClick={
          //() =>setPeople({person: [{ name: "Sascha", age: 29 }, { ...people.person[1] }]})
          () => setShowPerson(!showPerson)
        }
        >
        Toggle Person
      </button>

      {/*{people} -- JavaScript Lösung*/}  

      { showPerson ? <div> 
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

      </div> : null}
    </div>
  );
}

export default App;
