import { A } from "@solidjs/router";
import { Transition } from "solid-transition-group";

export default function Layout({ children }) {
    return (
        <>
            <header class="navbar bg-base-200 font-mono">
                <div class="flex-1">
                    <A class="btn btn-ghost" href="/">
                        <h1 class="font-bold text-xl uppercase">Maroisa</h1>
                    </A>
                </div>
                <A class="btn btn-ghost" href="about">
                    About
                </A>
                <A class="btn btn-ghost" href="project">
                    Projects
                </A>
            </header>
            <Transition name="slide-fade" mode="outin">
                {children}
            </Transition>
        </>
    );
}
