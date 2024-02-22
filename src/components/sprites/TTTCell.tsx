type CellType = {
	value: number;
};

export default function TTTCell({ value }: CellType) {

    // Condition for cell render
	if (value > 0){
        return (
            <div className="text-blue-500 text-xl">X</div>
        )
    } 
	else if (value < 0){
        return (
            <div className="text-red-500 text-xl w-20 h-20 aspect-square">O</div>
        )
    }

	return <div className="w-20 h-20">{" "}</div>;
}
