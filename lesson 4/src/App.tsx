import { Header } from "./Header";
import React, { useState } from "react";
import { Content } from "./Content";
import { Footer } from "./Footer";

export function App() {
  const [value, setValue] = useState("");
  return (
    <div className="application">
      <Header value={value} onChangeValue={setValue} />
      <Content searchValue={value} />
      <Footer />
    </div>
  );
}
