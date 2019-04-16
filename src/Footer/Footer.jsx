import React from 'react';
import styledFooter from'./styledFooter';
import { Link } from '../Styled';

class Footer extends React.Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={className}>
        <Link to="/CGV">
          CGV
        </Link>
      </div>
    );
  }
}

export default styledFooter(Footer);