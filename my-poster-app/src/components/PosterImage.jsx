function PosterImage({src, alt}) {
    return  (
    <img 
    src={src} 
    alt={alt}
    className= "w-full h-auto object-cover rounded-md"
    
    />
  );
} 
export default PosterImage;