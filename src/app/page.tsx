/*
  演習 2-3 stateを使ってカウンターの値を変化させる
*/
import Counter from "@/presentation/components/basic/Counter";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h2>stateの基本：カウンター</h2>
      <Counter />
    </main>
  );
}