import React from "react";
import Link from "next/link";
const LinkTab = ({ name, link }) => {
  return (
    <Link className="mr-4 underline-animation" href={link}>
      {name}
    </Link>
  );
};

export default LinkTab;
