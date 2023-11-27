import { Wrapper, useMediaQuery } from "./Layout";
import { P, H1 } from "./Typography";
const TableRow = ({ fontSize, weight, month, tokens, index }: any) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 753px)",
  });
  return (
    <>
      <Wrapper
        width={isResponsive ? "300px" : "400px"}
        borderBottom={"1px solid white"}
        className="flex flex-row items-center justify-between p-3"
      >
        <P
          className="mb-0"
          fontSize={fontSize}
          weight={weight}
          fontColor="white"
        >
          {month}
        </P>
        <P
          className="mb-0"
          fontSize={fontSize}
          weight={weight}
          fontColor="white"
        >
          {tokens}
        </P>
      </Wrapper>
    </>
  );
};
const TableComp = ({ data }: any) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 753px)",
  });
  return (
    <>
      <Wrapper
        width={isResponsive ? "330px" : "450px"}
        height="auto"
        bg="linear-gradient(to bottom, #2a70fa, #671acd);"
        borderRadius={"14px"}
        className={`flex flex-col items-center justify-center mx-3 ${
          isResponsive ? "my-3" : "my-3"
        } p-5`}
      >
        <H1
          ls="5px"
          weight="600"
          fontSize="24px"
          fontColor="white"
          className="mt-0 mb-3"
        >
          VESTING SCHEDULE
        </H1>
        <TableRow
          fontSize="18px"
          weight="600"
          month="Month"
          tokens={"Release %"}
        />
        {data.map((val: any, index: number) => {
          return (
            <>
              <TableRow
                key={index}
                fontSize="16px"
                weight="400"
                month={val.month}
                tokens={val.tokens}
                index={index}
              />
            </>
          );
        })}
        <P
          fontColor="white"
          className="mb-0 text-center pt-5 ms-2 me-2"
          fontSize="14px"
        >
          Holders who participate in the token conversion will receive all of
          their tokens 14 months from their conversion event. Cliffs will be for
          90 days, but unlocks will only be on the 1st of every month.
        </P>
      </Wrapper>
    </>
  );
};
export default TableComp;
