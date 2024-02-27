import { ChangeEvent } from "react";
import useContentWidth from "../../../hooks/layout/useContentWidth";
import { ContentWidthType } from "../../../state/layout/layoutAtom";
import Radio from "../../form/Radio";

function ContentWidth() {
    const [contentWidth, setContentWidth] = useContentWidth();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setContentWidth(e.target.value as ContentWidthType);
    };

    return (
      <div>
        <h4 className="mb-2 text-base font-normal text-slate-600 dark:text-slate-300">
          Content Width
        </h4>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <Radio
            label="Full Width"
            name="cwidth"
            value="full"
            checked={contentWidth === "full"}
            className="w-4 h-4"
            onChange={handleChange}
          />
          <Radio
            label="Boxed"
            name="cwidth"
            value="boxed"
            className="w-4 h-4"
            checked={contentWidth === "boxed"}
            onChange={handleChange}
          />
        </div>
      </div>
    );
}

export default ContentWidth