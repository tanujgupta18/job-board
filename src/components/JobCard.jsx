const JobCard = ({ job }) => {
  return (
    <div
      className="backdrop-blur-lg bg-white/5 border border-white/10
      rounded-xl p-6 transition duration-300
      hover:scale-105 hover:border-blue-500 hover:shadow-xl"
    >
      <h2 className="text-xl font-semibold text-white">{job.title}</h2>

      <p className="text-gray-400 mt-2">{job.department}</p>

      <p className="text-gray-400">{job.location}</p>

      <span className="inline-block mt-3 text-sm bg-blue-600 px-3 py-1 rounded-full">
        {job.type}
      </span>
    </div>
  );
};

export default JobCard;
