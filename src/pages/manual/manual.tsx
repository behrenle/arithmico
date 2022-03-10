import React from 'react';
import styled from 'styled-components';
import ManualSectionItem from '../../components/manual-section-item/manual-section-item';
import ManualSection from '../../components/manual-section/manual-section';

const Container = styled.div`
  margin: 50px 20%;
`;

const SearchField = styled.input.attrs({ type: 'text' })`
  height: 100px;
  border: 2px solid white;
  border-radius: 10px;
  width: 100%;
  outline: none;
  background-color: transparent;
  color: white;
  font-size: 24px;
  padding: 20px;
`;

export default function Manual() {
  return (
    <Container>
      <SearchField placeholder="Search" />
      <ManualSection heading="Hotkeys"></ManualSection>
      <ManualSectionItem synopsis="ALT + I" description="Focus input field" />
    </Container>
  );
}