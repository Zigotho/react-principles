import { memo, useCallback, useState } from 'react';

type Props = {
    handleClick: () => void;
    text: string;
}

const ChildComponent = memo(({ handleClick, text }: Props) => {
    console.log('click ha: ', text);

    return (
      <div>
        <button type="submit" onClick={() => handleClick()}>{text ?? 'Click me!'}</button>
      </div>
);
});

export const UseCallback = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = useCallback(() => {
        setCounter((oldCounter) => oldCounter + 1);
    }, []);

    const handleClickWithotuCallback = () => {
        setCounter(counter + 1);
    };

    return (
      <>
        <h1>useCallback</h1>
        <h2>
          Times useCallback Changes
          {counter}
        </h2>
        <button type="submit" onClick={() => setCounter(counter + 1)}>Increase Counter and update counter me!</button>
        <ChildComponent handleClick={handleClick} text="Click with useCallback" />
        <ChildComponent handleClick={handleClickWithotuCallback} text="Click without useCallback" />
      </>
);
};
