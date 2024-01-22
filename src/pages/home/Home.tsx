function Home() {
  return (
    <div>
      Home
      <div>
        <button onClick={() => {
            window.open('/')
        }}>새창열기</button>
      </div>
    </div>
  );
}

export default Home;
