import React from "react";

function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

export const Storage2 = () => {
  return (
    <div style={{ marginLeft: "500px" }}>
      <MyButton title="I'm a button in TS" />
    </div>
  );
};
