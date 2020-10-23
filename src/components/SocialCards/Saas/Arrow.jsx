import React from 'react'
import styled from 'styled-components'

const ArrowContainer = styled.div`
  margin-left: 16px;

  path {
    fill: ${props => props.textColor};
  }
`

const Arrow = props => {
  return (
    <ArrowContainer textColor={props.textColor}>
      <svg
        width="54"
        height="17"
        viewBox="0 0 54 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.5607 0.439325C45.9749 -0.146462 45.0251 -0.146462 44.4393 0.439325C43.8536 1.02511 43.8536 1.97486 44.4393 2.56064L48.8787 6.99998H1.5C0.671573 6.99998 0 7.67156 0 8.49998C0 9.32841 0.671573 9.99998 1.5 9.99998H48.8787L44.4393 14.4393C43.8536 15.0251 43.8536 15.9749 44.4393 16.5606C45.0251 17.1464 45.9749 17.1464 46.5607 16.5606L53.5607 9.56065C54.1464 8.97486 54.1464 8.02511 53.5607 7.43932L46.5607 0.439325Z"
          fill="#F7F8F9"
        />
      </svg>
    </ArrowContainer>
  )
}

export default Arrow
