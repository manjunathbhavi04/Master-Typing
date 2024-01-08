import { useEffect, useState } from "react";
import style from "./Paragraph.module.css";

const Paragraph = () => {
  const [index, setIndex] = useState(0);

  const str = `At first the professor scowled with concern. But then he said, that's
    all right. Run to my house. Tell my wife to give you one of my shirts.
    "Mrs. Esputa quickly fetched one of her husband's white shirts. But
    when Philip put it on, she began to exclaim, "Oh, dear! Gracious!" The
    shirt was so large that Philip was almost lost in it. Hastily Mrs.
    Esputa found a box of pins. In a twinkling, her nimble fingers pinned
    enough tucks in the shirt to make it fit Philip.`;

  const paras = str.split(""); // Replace newline with space and split into letters
  console.log(paras);

  const handleKey = (event) => {
    console.log(event.key);
    if(event.key == "Backspace"){
        setIndex(index - 1);
    }
    else if (event.key === paras[index]) {
      console.log("true");
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log("false");
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [index]);

  return (
    <>
      <div className="para-container h-screen flex justify-center items-center">
        <p className={`${style.para} w-2/4 text-2xl`}>
          {paras.map((item, i) => (
            <span
              key={i}
              className={`${i < index && style.highlight} ${
                i === index && style.vl 
              }`}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </>
  );
};

export default Paragraph;
