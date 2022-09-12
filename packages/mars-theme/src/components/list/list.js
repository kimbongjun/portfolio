import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Section>
      <Container fluid>
        <Row>
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}
          <Pagination />
        </Row>
      </Container>
    </Section>
  );
};

export default connect(List);

const Section = styled.section`
  width: 800px;
  margin: 0;
  // padding: 24px;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;

const ListWrap = styled.div`
  display : flex;
  flex-flow : row wrap;
  margin-left: -15px;
  margin-right: -15px;
`
