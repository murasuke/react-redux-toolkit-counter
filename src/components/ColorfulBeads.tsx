import { VFC } from 'react';
import { useSelector } from 'react-redux';
import { Container, Label, SemanticCOLORS } from 'semantic-ui-react';
import styled from 'styled-components';

import { CounterState } from '../features/counter';

const ContainerWithMgn = styled(Container)`
  margin-top: 40px;
`;

const range = (n: number): number[] => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));

const colors: SemanticCOLORS[] = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

const ColorfulBeads: VFC<{ count?: number }> = () => {
  const count = useSelector<CounterState, number>((state) => state.count);

  return (
    <ContainerWithMgn>
      {range(count).map((n) => (
        <Label key={n} circular color={colors[n % colors.length]} />
      ))}
    </ContainerWithMgn>
  );
};

export default ColorfulBeads;
