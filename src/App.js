import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <div className="grid">
        <header className="grid__header">App Heder</header>
        <main className="grid__main">
          <h1>Main Content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptatem provident assumenda vero aut facere saepe repellendus
            architecto enim! Dolore vitae ab numquam labore omnis quos accusamus
            voluptatum ipsam repudiandae.
          </p>
        </main>
        <aside className="grid__aside">
          <h2>Aside Content</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            veniam minima laudantium accusantium est animi laborum tempora quos!
            Ut reprehenderit laborum maxime, facere dolores incidunt excepturi
            quia repellat obcaecati modi. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Reiciendis, alias accusamus, quisquam
            vel quibusdam aspernatur officiis vitae explicabo non eius atque
            minima sunt, commodi architecto adipisci quaerat natus dolores
            praesentium.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default App;
