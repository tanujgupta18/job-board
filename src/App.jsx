import React, { useState } from "react";
import jobs from "./data/jobs";
import JobCard from "./components/JobCard";
import FilterBar from "./components/FilterBar";

const App = () => {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesDept =
      selectedDept === "All" || job.department === selectedDept;

    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesDept && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black p-10">
      <h1 className="text-5xl font-bold text-center mb-10 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Dynamic Job Board
      </h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500
          focus:ring-2 focus:ring-blue-500/30 transition"
        />
      </div>
      <FilterBar
        selectedDept={selectedDept}
        setSelectedDept={setSelectedDept}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-center text-gray-400 col-span-3">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
