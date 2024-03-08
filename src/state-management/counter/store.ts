import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}
//example of zustand, should use this in my app
const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set((store) => ({ max: 10 })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useCounterStore);

export default useCounterStore;
