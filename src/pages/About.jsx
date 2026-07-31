import { A } from "@solidjs/router";

export default function About() {
    return (
        <main>
            <h2>About Me</h2>
            <p class="mb-4">
                My name is <span class="font-bold">Ahmad Roisul Ahsan</span>
                .
                <br class="mb-2" />
                I’m a 4th semester{" "}
                <A
                    href="https://ptik.fkip.uns.ac.id"
                    target="_blank"
                    class="text-cyan-100 font-bold"
                >
                    Informatics and Computer Technology Education
                </A>{" "}
                student at{" "}
                <A
                    href="https://uns.ac.id"
                    target="_blank"
                    class="text-cyan-100 font-bold"
                >
                    Sebelas Maret University
                </A>{" "}
                who likes to spend way too much time in front of a terminal. I
                can’t code because my desktop always seems to need more ricing.
            </p>

            <p>
                I enjoy tweaking it almost as much as writing code. I try to
                live by the KISS principle because Terry A. Davis says so. I’m
                also a FOSS enthusiast who believes good software should be
                open, shared, and hackable.
            </p>
        </main>
    );
}
