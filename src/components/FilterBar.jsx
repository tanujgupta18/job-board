const FilterBar = ({ selectedDept, setSelectedDept }) => {
  const filters = ["All", "Engineering", "Design", "Marketing"];

  return (
    <div className="flex gap-4 flex-wrap justify-center mb-10">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedDept(item)}
          className={`px-4 py-2 rounded-lg border 
          ${
            selectedDept === item
              ? "bg-blue-600 text-white"
              : "border-slate-600 text-gray-300 hover:bg-slate-800"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
