import { teamMembers } from "../constants/constant";
function AvtarFrame() {
  const maxVisible = 4;
  const visibleMembers = teamMembers.slice(0, maxVisible);
  const remainingCount = teamMembers.length - maxVisible;

  return (
    <div className="flex -space-x-2 mr-6">
      {visibleMembers.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Team member ${index + 1}`}
          className="w-[38px] h-[38px] rounded-full border-2 border-white"
        />
      ))}
      {remainingCount > 0 && (
        <div className="w-[38px] h-[38px] rounded-full bg-[#f3d7da] border-2 border-white flex items-center justify-center">
          <span className="text-[15px] font-medium text-[#d15b67] capitalize">
            +{remainingCount}
          </span>
        </div>
      )}
    </div>
  );
}

export default AvtarFrame
