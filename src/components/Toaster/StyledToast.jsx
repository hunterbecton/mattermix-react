import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

const StyledToast = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 0.25rem;
  }

  .Toastify__toast--default {
    background-color: ${(props) => props.theme.colors.black02};
    color: ${(props) => props.theme.colors.white01};
  }

  .Toastify__close-button--default {
    color: ${(props) => props.theme.colors.white01};
    opacity: 1;
  }

  .Toastify__progress-bar--default {
    background: ${(props) => props.theme.colors.blue01};
  }

  .Toastify__toast--error {
    background-color: ${(props) => props.theme.colors.red01};
  }
`;

export default StyledToast;
