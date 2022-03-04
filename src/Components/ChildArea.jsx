import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "pink"
};

export const ChildArea = memo((props) => {
  const { open } = props;
  const data = [...Array(3000).keys()];
  console.log("Childがレンダリングされたよ");
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open && (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      )}
    </>
  );
});
