type Props = {
  wrapperClass?: string | undefined;
  src: string;
  className?: string | undefined;
  alt?: string | undefined;
};

const Image = ({
  wrapperClass = "custom-class",
  src,
  className,
  alt = "image-title",
}: Props) => {
  return (
    <div className={`relative ${wrapperClass}`}>
      {src ? (
        <img src={src} alt={alt} className={`max-w-full block ${className}`} />
      ) : (
        <div className="bg-neutral-300 w-full h-[200px] flex flex-col items-center justify-center font-medium rounded-md text-xl text-slate-900 capitalize">
          Please Set Image
          <code className="mt-3 text-sm lowercase text-primary-500">
            [src="images/all-img/image-1.png"]
          </code>
        </div>
      )}
    </div>
  );
};

export default Image;
