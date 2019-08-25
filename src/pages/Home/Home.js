import React from 'react'
import { Navbar, Button } from "@blueprintjs/core";

export default function Home({ history }) {
    return (
        <Navbar>
            <Button icon="arrow-left" intent="danger" text="Sair"/>
        </Navbar>
    )
}