import React, { useLayoutEffect, useState, useRef } from 'react';

export default function ExampleComponent() {
  const [height, setHeight] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      setHeight(elementRef.current ? elementRef.current.offsetHeight : 0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div ref={elementRef}>
      {`The height of this element is: ${height}px`}
    </div>
  );
}