export default function Home() {
  function handleVibrate() {
    if (typeof navigator.vibrate === "function") {
      navigator.vibrate([1000]);
    }
  }

  return (
    <div>
      <button onClick={handleVibrate}>Vibrate</button>
    </div>
  );
}
