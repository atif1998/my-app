import useToaster from "@/hooks/useToaster";

const Home = () => {
  const { createToaster } = useToaster();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={() => {
          createToaster("", "User Updated", "This is user title");
        }}
      >
        Give me a toast
      </button>
    </div>
  );
};
