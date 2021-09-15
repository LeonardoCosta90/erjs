export function HelloWorld() {
  const name = "Leonardo";
  return (
    <div>
      <h1>
        Hello,
        {name === "Leonardo" ? "Costa" : name}!!!
      </h1>
    </div>
  );
}
