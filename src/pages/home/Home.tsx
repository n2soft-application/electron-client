
function Home() {
  return (
    <div>
      Home
      <div>
        <button
          onClick={() => {
            window.open("/");
          }}
        >
          새창열기1
        </button>

        <a href="/" target="_blank">
          새창열기2
        </a>
        {Array(100).fill(0).map(item => (
            <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default Home;
