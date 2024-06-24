"use client";
import { ModalCreateAccountActive } from "@/lib/atoms";
import { useRecoilState } from "recoil";
import { CrossIcon } from "../ui/CrossIcon";
import { motion, AnimatePresence } from "framer-motion";

const CreateAccountModal = () => {
  const [active, setModalState] = useRecoilState(ModalCreateAccountActive);

  const handleCloseModal = () => {
    setModalState(false);
  };

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0  backdrop-blur z-10 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="bg-purple-100 min-h-1/2 w-1/3 m-auto rounded-3xl overflow-hidden shadow-md">
            <div className="p-2 flex justify-end items-center">
              <button onClick={handleCloseModal}>
                <CrossIcon />
              </button>
            </div>
            <form className="flex flex-col justify-center items-center w-full p-10 pt-0">
              <h2 className="font-bold text-black text-4xl">Register</h2>
              <label className="w-full mb-4">
                <p className="font-bold text-black">Full Name:</p>
                <input
                  type="text"
                  className="border-b border-black w-full p-2 outline-none bg-purple-100 text-black"
                  required
                />
              </label>
              <label className="w-full mb-4">
                <p className="font-bold text-black">Email:</p>
                <input
                  type="email"
                  className="border-b border-black w-full p-2 outline-none bg-purple-100 text-black"
                  required
                />
              </label>
              <label className="w-full mb-4">
                <p className="font-bold text-black">Password:</p>
                <input
                  type="password"
                  className="border-b border-black w-full p-2 outline-none bg-purple-100 text-black"
                  required
                />
              </label>
              <label className="w-full mb-4">
                <p className="font-bold text-black">Repeat Password:</p>
                <input
                  type="password"
                  className="border-b border-black w-full p-2 outline-none bg-purple-100 text-black"
                  required
                />
              </label>
              <button className="bg-purple-800 w-full p-3 mt-4 rounded-full font-bold">
                Create Account
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { CreateAccountModal };
