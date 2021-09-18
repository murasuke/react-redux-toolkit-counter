import { VFC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Statistic } from 'semantic-ui-react';

import { counterSlice, CounterState } from '../features/counter';

const BULK_UNIT = 10;

const CounterBoard: VFC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();
  const { added, incremented, decremented } = counterSlice.actions;

  return (
    <Card className="centered">
      <Statistic>
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={() => dispatch(decremented())}>
            -1
          </Button>
          <Button color="green" onClick={() => dispatch(incremented())}>
            1
          </Button>
        </div>
        <div className="fluid-button">
          <Button fluid color="grey" onClick={() => dispatch(added(BULK_UNIT))}>
            +{BULK_UNIT}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default CounterBoard;
