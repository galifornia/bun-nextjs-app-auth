'use client';
import { useState } from 'react';

export const WhoAmIButton = ({
  whoAmIAction,
}: {
  whoAmIAction: () => Promise<string>;
}) => {
  const [name, setName] = useState<string>();
  return (
    <div>
      <button
        onClick={async () => {
          setName(await whoAmIAction());
        }}
      >
        Who Am I?
      </button>
      {name && <div>You are {name}</div>}
    </div>
  );
};
