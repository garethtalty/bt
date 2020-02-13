import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Card, HealthIcon } from 'components';
import { apiService } from 'services';

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  border: 1px solid #333;
  margin: 10px;
  width: 350px;
`;

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loaded: false,
    };
  }

  componentDidMount() {
    const cards = apiService
      .get('/cards')
      .then(cards => {
        this.setState({ cards });
      })
      .finally(() => this.setState({ loaded: true }));
  }

  render() {
    const { cards, loaded } = this.state;
    return (
      loaded && (
        <StyledCardContainer>
          {cards.map(({ name, uri, info: { health } }, key) => (
            <StyledCard key={key} data-testid="service-card">
              <Card title={name}>
                <div>
                  uri:{' '}
                  <a href={uri} target="_blank">
                    {uri}
                  </a>
                </div>
                <div>
                  health: <HealthIcon status={health} />
                </div>
              </Card>
            </StyledCard>
          ))}
        </StyledCardContainer>
      )
    );
  }
}

export { Dashboard };
