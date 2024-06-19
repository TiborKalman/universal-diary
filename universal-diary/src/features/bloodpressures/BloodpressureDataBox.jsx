import styled from "styled-components";
import { format, isToday } from "date-fns";

import { formatDistanceFromNow } from "../../utils/helpers";

const StyledBloodpressureDataBox = styled.section`
  background-color: var(--color-grey1);
  border: 1px solid var(--color-grey10);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand1);
  padding: 2rem 4rem;
  color: #060801;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

function BloodpressureDataBox({ bloodpressure }) {
  const { id, created_at, pressureDate, sys_mmhg, dia_mmhg, pulse_per_minute } =
    bloodpressure;
  return (
    <>
      <StyledBloodpressureDataBox>
        <Header>
          <div>ID: {id}</div>
          <div>Created: {created_at}</div>
        </Header>

        <Section>
          <p>
            Pressure Date:
            {format(new Date(pressureDate), "EEE, MMM dd yyyy")} (
            {isToday(new Date(pressureDate))
              ? "Today"
              : formatDistanceFromNow(pressureDate)}
            ) &mdash; {format(new Date(pressureDate), "EEE, MMM dd yyyy")}
          </p>
          <p>
            <span>&bull;</span> Sys [mmHg]: {sys_mmhg}
          </p>
          <p>
            <span>&bull;</span> Dia [mmHg]: {dia_mmhg}
          </p>
          <p>
            <span>&bull;</span> Pulse [min]: {pulse_per_minute}
          </p>
        </Section>

        <Footer>
          <p>{format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
        </Footer>
      </StyledBloodpressureDataBox>
    </>
  );
}

export default BloodpressureDataBox;
