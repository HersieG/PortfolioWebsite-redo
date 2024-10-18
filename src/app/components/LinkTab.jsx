import React from "react";
import Link from "next/link";
const LinkTab = ({ name, link }) => {
  return (
    <Link className="link-tab" href={link}>
      {name}
    </Link>
  );
};

export default LinkTab;
