import React from "react";
import SkilloraContext from "./SkilloraContext";

const SkilloraProvidor = ({ children }) => {
    const shareData = {
        name: 'skillOra'
    }
    return <SkilloraContext value={shareData}>{children}</SkilloraContext>;
};

export default SkilloraProvidor;
