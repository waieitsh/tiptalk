import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const LogoImg = styled.img`
  height: 60%;
  &:hover {
    cursor: pointer;
  }
`;

const Logo = ({ src, alt }) => {
  const history = useHistory();

  const goToMain = () => {
    history.push('/');
  };

  return (
    <>
      <LogoImg
        src={src}
        alt={alt}
        onClick={goToMain}
        onContextMenu={(e) => e.preventDefault()}
      />
    </>
  );
};

export default Logo;
