function PosterLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white max-w-4xl mx-auto shadow-lg">
      {children}
    </div>
  );
} 
export default PosterLayout;