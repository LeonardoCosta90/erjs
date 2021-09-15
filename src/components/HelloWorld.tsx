export function HelloWorld() {
  const name = "Leonardo";
  const title = <h1>Hello, {name}!!!</h1>;

  if (name === "Leonardo") {
    return (
      <div>
        <h1 style={{ background: "red" }}>{name}</h1>
      </div>
    );
  }
  return <div>{title}</div>;
}
