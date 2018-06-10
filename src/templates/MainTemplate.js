// @flow
import * as React from 'react';

type Props = {
  /** Children nodes to render. */
  children: React.Node,
};

const MainTemplate = ({ children }: Props): React.Node => (
  <div className="app-wrapper">
    {children}
  </div>
);

export default MainTemplate;
