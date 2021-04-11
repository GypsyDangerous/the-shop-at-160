import styled from "styled-components";

const header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 1.5rem;
  background: #f2f2f2;
`;

const container = styled.div`
  max-width: 70%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;

const nav = styled.ul`
  display: flex;
  gap: 1rem;

  a {
    padding: 0.5rem 1rem;
    .active {
      color: rgba(206, 32, 38);
    }
  }
`;

export default {
  container,
  nav,
  header,
};
