import { Toaster } from "react-hot-toast";
import AllRoutes from "./Application/Routes/AllRoutes";

export default function App() {
  return (
    <div className=" h-[100dvh] w-full">
      <Toaster position="top-center" reverseOrder={false} />
      <AllRoutes />
    </div>
  );
}
