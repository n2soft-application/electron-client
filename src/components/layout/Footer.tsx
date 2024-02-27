import useFooterType from "../../hooks/layout/useFooterType";

type Props = {
  className?: string | undefined;
};

function Footer({ className = "custom-class" }: Props) {
  const [footerType] = useFooterType();

  const footerclassName = () => {
    switch (footerType) {
      case "sticky":
        return "sticky bottom-0 z-[999]";
      case "static":
        return "static";
      case "hidden":
        return "hidden";
    }
  };

  return (
    <footer className={className + " " + footerclassName()}>
      <div className="px-6 py-4 bg-white site-footer dark:bg-slate-800 text-slate-500 dark:text-slate-300">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div className="text-sm text-center ltr:md:text-start rtl:md:text-right">
            COPYRIGHT &copy; 2024 THE NEXT, All rights Reserved
          </div>
          <div className="text-sm text-center ltr:md:text-right rtl:md:text-end">
            Hand-crafted & Made by{" "}
            <a
              href="#null"
              target="_blank"
              className="font-semibold text-primary-500"
            >
              Codeshaper
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
