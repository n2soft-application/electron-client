function Footer() {
  return (
    <div className="flex flex-col items-center justify-between w-full px-1 pt-3 pb-8 mt-4 lg:px-8 xl:flex-row">
      <h5 className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <p className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
          ©{2023} N2SOFT. All Rights Reserved.
        </p>
      </h5>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href="#null"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Support
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="#null"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              License
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
