import {render,screen} from '@testing-library/react';
import App from './App';
test('renders learn react link', () =>{
  render(<App />) ;
  const linkElememt = screen.getByText(/learn react/i);
  expect(linkElememt).toBeInTheDocument();

} );

