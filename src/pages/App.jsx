import Face from "../assets/face.webp";

export default function App() {
    return (
        <main class="max-w-full">
            <div class="flex items-center gap-12 justify-center h-2/3">
                <div class="aspect-square rounded-full border-2 p-2 w-max">
                    <img class="rounded-full w-full h-full" src={Face}></img>
                </div>
                <div class="flex flex-col items-start">
                    <h2>Maroisa</h2>
                    <p>A stubborn KISS enthusiast</p>
                </div>
            </div>
        </main>
    );
}
