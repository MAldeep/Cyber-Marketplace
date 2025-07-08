export default function SubmitBtn({ isValid, dirty }) {
  return (
    <button
      className={`w-full bg-black text-white 
              p-2 rounded-2xl cursor-pointer hover:bg-white
                hover:text-black hover:border
                hover:border-gray-500
              ${
                !isValid || !dirty
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100"
              }
              `}
      type="submit"
      disabled={!isValid || !dirty}
    >
      Register
    </button>
  );
}
