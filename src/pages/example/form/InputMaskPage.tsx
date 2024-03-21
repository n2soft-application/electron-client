import Card from "../../../components/card/Card";
import InputGroup from "../../../components/form/InputGroup";
import STextinput from "../../../components/form/STextInput";

const InputMaskPage = () => {
    return (
      <div>
        <Card title="Input Mask">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2">
            <STextinput
              label="Credit Card"
              isMask
              options={{ creditCard: true }}
              placeholder="0000 0000 0000 0000"
            />
            <InputGroup
              label="Phone Number"
              prepend="MY (+6)"
              placeholder="Phone Number"
              id="phoneNumber"
              options={{ phone: true, phoneRegionCode: "US" }}
              isMask
            />

            <STextinput
              label="Date"
              id="date"
              options={{ date: true, datePattern: ["Y", "m", "d"] }}
              placeholder="YYYY-MM-DD"
              isMask
            />
            <STextinput
              label="Time"
              id="time"
              options={{ time: true, timePattern: ["h", "m", "s"] }}
              placeholder="HH:MM:SS"
              isMask
            />
            <STextinput
              label="Numeral Formatting"
              id="nu"
              options={{ numeral: true }}
              placeholder="10,000"
              isMask
            />
            <STextinput
              label="Blocks"
              id="block"
              options={{ blocks: [4, 3, 3], uppercase: true }}
              placeholder="Block[1,4,7]"
              isMask
            />
            <STextinput
              label="Delimiters"
              id="delimiters"
              options={{ delimiter: "·", blocks: [3, 3, 3], uppercase: true }}
              placeholder="Delimiter: '.'"
              isMask
            />
            <STextinput
              label="Custom Delimiters"
              id="customDelimiter"
              options={{
                delimiters: [".", ".", "-"],
                blocks: [3, 3, 3, 2],
                uppercase: true,
              }}
              placeholder="Delimiter: ['.', '.', '-']"
              isMask
            />
            <STextinput
              label="prefix"
              id="prefix"
              options={{
                prefix: "+88",
                blocks: [3, 3, 3, 4],
                uppercase: true,
              }}
              placeholder="+88"
              isMask
            />
          </div>
        </Card>
      </div>
    );
  };

  export default InputMaskPage;