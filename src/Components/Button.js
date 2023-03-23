import React from "react";
import { Button } from "@mui/material";

export default function basicButtons({title, handleAction}){

    return (
        <Button variant="contained" onClick={handleAction}>{title}</Button>
    )
}