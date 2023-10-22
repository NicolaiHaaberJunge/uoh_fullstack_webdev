const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.score}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} score={props.score1} />
      <Part name={props.part2} score={props.score2} />
      <Part name={props.part3} score={props.score3} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of excercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const excercise1 = 10;
  const part2 = "Using props to pass data";
  const excercise2 = 7;
  const part3 = "State of a component";
  const excercise3 = 14;

  return (
    <div>
      <Header name={course} />
      <Content
        part1={part1}
        score1={excercise1}
        part2={part2}
        score2={excercise2}
        part3={part3}
        score3={excercise3}
      />
      <Total total={excercise1 + excercise2 + excercise3} />
    </div>
  );
};

export default App;
