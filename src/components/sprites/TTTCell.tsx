import XSVG from "@/../public/tic-tac-toe/X";
import OSVG from "../../../public/tic-tac-toe/O";
type CellType = {
	value: number;
};

export default function TTTCell({ value }: CellType) {
	// Condition for cell render
	if (value > 0) {
		return <XSVG />;
	} else if (value < 0) {
		return <OSVG />;
	}

	return <button className=""> </button>;
}
