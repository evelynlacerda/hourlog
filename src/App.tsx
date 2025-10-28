import { Toaster } from "sonner";
import Router from "./routes/router";

function App() {
	return (
		<>
			<Router />
            <Toaster richColors closeButton />
		</>
	);
}

export default App;
