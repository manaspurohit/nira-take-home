import { CSSProperties } from "react";

interface Props {
  backgroundColor: string,
  text: string,
};

function Pill({backgroundColor, text}: Props) {
  const pillStyle: CSSProperties = {
    color: 'white',
    padding: '3px 7px',
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: '16px',
    fontSize: 'medium',
    backgroundColor,
  };

  return (
    <div style={pillStyle}>{text}</div>
  );
}

export default Pill;