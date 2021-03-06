import React, { useState } from "react";
import PluginObjectToggle from "../plugin-object-toggle/plugin-object-toggle";
import styled from "styled-components";
import { Disclosure } from "@headlessui/react";
import ExpandMore from "@components/icons/expand-more";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  margin-bottom: 0.5em;
`;

const PluginTitle = styled.h1`
  font-size: 2.5em;
  font-weight: var(--me-font-weight-normal);
  color: var(--me-text-400);
  margin: 0;
`;

const PluginObjectsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DisclosureButton = styled(Disclosure.Button)<{
  open: boolean;
  children: React.ReactNode /* idk why styled components does not get the children property*/;
}>`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  border-bottom: ${({ open }) =>
    open ? "none" : "1px solid var(--me-text-100)"};
  outline: none;
`;

const ExpandMoreIcon = styled(ExpandMore)<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? "180" : "0")}deg);
  margin-left: auto;
  transition: transform 0.25s;
`;

interface PluginItemProps {
  name: string;
  synopsis: string;
  description: string;
}
interface PluginConfigProps {
  name: string;
  items: PluginItemProps[];
}

export default function PluginConfig({ name, items }: PluginConfigProps) {
  const [state, setState] = useState(() =>
    Object.fromEntries(items.map((item) => [item.name, true]))
  );

  return (
    <Section>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton open={open}>
              <PluginTitle>{name}</PluginTitle>
              <ExpandMoreIcon open={open} />
            </DisclosureButton>
            <Disclosure.Panel>
              <PluginObjectsList>
                {items.map((item, index) => (
                  <PluginObjectToggle
                    key={index}
                    enabled={!!state[item.name]}
                    label={item.synopsis}
                    onChange={() =>
                      setState({
                        ...state,
                        [item.name]: !state[item.name],
                      })
                    }
                  ></PluginObjectToggle>
                ))}
              </PluginObjectsList>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Section>
  );
}
