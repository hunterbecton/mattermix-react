import styled from 'styled-components'

const LayoutContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: minmax(3rem, auto) minmax(auto, 84rem) minmax(
      3rem,
      auto
    );
  grid-template-rows: min-content 1fr;
`

export default LayoutContainer
