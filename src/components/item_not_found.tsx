import { motion } from "framer-motion";

const NoItemsFound = ({ searchValue }: { searchValue: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full text-center py-10"
    >
      <p className="text-xl text-white font-bold glowing-text">
        ✨ No magical relics found with the name: <span className="text-[#A259FF]">{searchValue}</span>
      </p>
      <p className="text-sm text-gray-400 mt-2">
        Perhaps it lies hidden in another realm...
      </p>
    </motion.div>
  );
};

export default NoItemsFound;
