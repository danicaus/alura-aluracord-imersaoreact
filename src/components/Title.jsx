import React from 'react';
import stylesConfig from '../../config.json';

function Title({variant, children}) {
  const Tag = variant || 'h1';

  return (
    <>
      <Tag>
        {children}
      </Tag>
      <style jsx>{`
        ${Tag} {
          color: ${stylesConfig.theme.colors.primary['400']};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

export default Title;