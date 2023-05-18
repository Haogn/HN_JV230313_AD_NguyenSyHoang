import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Listfeedback from "./Listfeedback/Listfeedback";
import Form from "./Form/Form";

function ParentComponent() {
  return (
    <div>
      <Header />
      <Search />
      <div className="flex-feedback">
        <Listfeedback />
        <Form />
      </div>
    </div>
  );
}

export default ParentComponent;
